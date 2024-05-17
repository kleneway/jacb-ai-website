import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  type DropResult,
} from "react-beautiful-dnd";
import Droppable from "./Droppable";

import { SelectedTask } from "./SelectedTask";
import { StandardTask } from "./StandardTask";
import { type Task, TaskStatus } from "~/types";
import { TaskStatusComponent } from "./TaskStatus";

interface TasksProps {
  tasks: Task[];
  onRemove: (taskId: string) => void;
  onEdit: (taskId: string, newName: string) => void;
  onStart: (taskId: string) => void;
}

const Tasks: React.FC<TasksProps> = ({
  tasks: _tasks = [],
  onRemove,
  onEdit,
  onStart,
}) => {
  const [tasks, setTasks] = useState<Task[]>(_tasks);

  useEffect(() => {
    console.log("Tasks updated", _tasks);
    setTasks(_tasks);
  }, [_tasks]);

  const handleDragEnd = (result: DropResult) => {
    console.log("Drag end", result);
    if (!result.destination) {
      return;
    }

    const newTasks = Array.from(tasks);
    const [removed] = newTasks.splice(result.source.index, 1);
    if (!removed) {
      console.log("No task removed");
      return;
    }
    newTasks.splice(result.destination.index, 0, removed);

    setTasks(newTasks);
  };

  return (
    <div className="grid h-full min-h-screen w-full grid-rows-[1fr_auto] border-x border-coolGray-400/20 bg-gray-900 bg-slate-50/5">
      <div className="hide-scrollbar overflow-auto">
        {tasks.filter((t) => t.status === TaskStatus.TODO).length > 0 ? (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="tasks">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="p-4"
                >
                  {tasks
                    .filter((t) => t.status === TaskStatus.TODO)
                    .map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mb-4"
                          >
                            <StandardTask task={task} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <div className="p-4 text-center text-blueGray-400">
            No tasks to display
          </div>
        )}
      </div>
      <TaskStatusComponent tasks={tasks} />
    </div>
  );
};

export default Tasks;
