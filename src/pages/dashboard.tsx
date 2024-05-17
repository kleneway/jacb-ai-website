import { ChatCompletionStreamingRunner } from "openai/lib/ChatCompletionStreamingRunner";
import React, { useEffect, useRef, useState } from "react";
import { Chat } from "~/components/chat/Chat";
import Tasks from "~/components/dashboard/tasks";
import Workspace from "~/components/dashboard/workspace";
import {
  InternalEventType,
  type Issue,
  SidebarIcon,
  TaskStatus,
  TaskType,
  type InternalEvent,
  type Plan,
  type PromptDetails,
  type CodeFile,
  type Command,
  type PullRequest,
  type NewIssue,
} from "~/types";
import { PLANS } from "~/data/plans";
import { createClient } from "@supabase/supabase-js";

import { type Message, type Task, Role } from "~/types";
import {
  extractFilePathWithArrow,
  findTaskForInternalEvent,
  getIssueDescriptionFromMessages,
  getSnapshotUrl,
  shallowSnakeCaseToCamelCase,
} from "~/utils";
import ChatHeader from "~/components/chat/ChatHeader";

const TOP_MENU_HEIGHT = 0;

const CREATE_ISSUE_PROMPT =
  "Looks like our task queue is empty. What do you need to get done next? Give me a quick overview and then I'll ask some clarifying questions. Then I can create a new GitHub issue and start working on it.";

// Initialize Supabase client
const supabaseUrl = "https://yeoamgnozxgaklixkfnt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllb2FtZ25venhnYWtsaXhrZm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzA5NjMsImV4cCI6MjAyNDIwNjk2M30.PxmPBNFaUYJxwAGzbBpbDl2LztWIRIRj3bVfnAfVc2I";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const DashboardPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [isAtBottom, setIsAtBottom] = useState<boolean>(true);
  const [responding, setResponding] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);
  const [selectedIcon, setSelectedIcon] = useState<SidebarIcon>(
    SidebarIcon.Plan,
  );
  const [recentlyUpdatedTaskIds, setRecentlyUpdatedTaskIds] = useState<
    string[]
  >([]);
  const [repos, setRepos] = useState<string[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<string>("");
  const [issues, setIssues] = useState<Issue[]>([]);

  const lastFetchTimes = useRef<Record<string, number>>({});

  useEffect(() => {
    const fetchPlanStatus = async (task: Task) => {
      const now = Date.now();
      const lastFetchTime = lastFetchTimes.current[task.id] ?? 0;

      if (
        task.status === TaskStatus.IN_PROGRESS &&
        now - lastFetchTime < 5000
      ) {
        return;
      }

      lastFetchTimes.current[task.id] = now;
      setRecentlyUpdatedTaskIds((ids) => ids.filter((id) => id !== task.id));

      const response = await fetch("/api/dashboard/plan-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      const { statusDescription, isMostRecentStepCompleted } = data;
      let currentPlanStep = data.currentPlanStep ?? 0;

      if (task.status === TaskStatus.DONE) {
        // set the current plan step to the last step
        currentPlanStep = (task.plan?.length ?? 1) - 1;
      }
      setTasks((tasks) =>
        tasks.map((t) => {
          if (t.id === task.id) {
            // mark all the previous plan steps as completed
            t.plan?.forEach((step, index) => {
              if (
                (t.status === TaskStatus.DONE || index < currentPlanStep) ??
                0
              ) {
                step.isComplete = true;
              }
            });
            return {
              ...t,
              currentPlanStep,
              statusDescription:
                isMostRecentStepCompleted && t.status !== TaskStatus.DONE
                  ? statusDescription
                  : t.statusDescription,
            } as Task;
          }
          return t;
        }),
      );
    };

    for (const taskId of recentlyUpdatedTaskIds) {
      const task = tasks.find((t) => t.id === taskId);
      if (task) {
        void fetchPlanStatus(task);
      }
    }
  }, [tasks, recentlyUpdatedTaskIds]);

  useEffect(() => {
    // call the /api/jacob/repos endpoint to get the list of repos
    const fetchRepos = async () => {
      const response = await fetch("/api/jacob/repos");

      if (!response.ok) {
        const errorMessage = await response.text();
        console.log("Failed to fetch repos:", errorMessage);
        return;
      }
      const data = (await response.json()) as {
        repos: string[];
        message: string;
      };
      setRepos(data.repos);
    };
    void fetchRepos();
  }, []);

  useEffect(() => {
    // call the /api/jacob/issues endpoint to get the list of issues
    const fetchIssues = async (selectedRepo: string) => {
      const response = await fetch("/api/jacob/issues?repo=" + selectedRepo);

      if (!response.ok) {
        const errorMessage = await response.text();
        console.log("Failed to fetch issues:", errorMessage);
        return;
      }
      const data = (await response.json()) as {
        issues: Issue[];
      };
      setIssues(data.issues);
      // TEMP: go through each issue and create a new task for each one
      for (const [index, issue] of data.issues.entries()) {
        const newTask: Task = {
          id: Math.random().toString(36).substring(7),
          repo: selectedRepo,
          name: issue.title,
          type: issue.filesToCreate?.length
            ? TaskType.CREATE_NEW_FILE
            : TaskType.