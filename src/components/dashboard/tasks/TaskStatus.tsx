import { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { TaskStatus, type Task } from "~/types";

// Constants for simplicity, these would be dynamically calculated in a real-world application
const SPRINT_DURATION = 10;
const DAILY_GOAL = 5;

const calculateVelocity = (tasks: Task[]): number => {
  const completedTasks = tasks.filter(
    (task) => task.status === TaskStatus.DONE,
  );
  const totalPoints = completedTasks.reduce(
    (acc, task) => acc + task.storyPoints,
    0,
  );
  return totalPoints / SPRINT_DURATION;
};

interface TaskStatusProps {
  tasks: Task[];
}

export const TaskStatusComponent = ({ tasks }: TaskStatusProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const completedTasks = tasks.filter(
    (task) => task.status === TaskStatus.DONE,
  );
  const inProgressTasks = tasks.filter(
    (task) => task.status === TaskStatus.IN_PROGRESS,
  );

  const totalProgress = useMemo(
    () =>
      ((completedTasks?.length ?? 0) / (inProgressTasks?.length || 1)) * 100,
    [inProgressTasks, completedTasks],
  );
  const velocity = useMemo(
    () => calculateVelocity(inProgressTasks),
    [inProgressTasks],
  );
  console.log("totalProgress", totalProgress);

  return (
    <div className="border-b border-blueGray-700 bg-blueGray-700/20 pb-1 text-blueGray-300  transition-all duration-300">
      <header className="flex items-center justify-between border-b-2 border-blueGray-700/20 bg-blueGray-900/20 px-4 py-2">
        <h2 className="text-md font-bold ">Task Progress</h2>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hover:text-green-500"
        >
          <FontAwesomeIcon
            icon={collapsed ? faChevronDown : faChevronUp}
          />
        </button>
      </header>
      {!collapsed && (
        <div className="px-4 py-2">
          <p>Total Progress: {totalProgress.toFixed(2)}%</p>
          <p>Velocity: {velocity.toFixed(2)} points/day</p>
        </div>
      )}
    </div>
  );
};
