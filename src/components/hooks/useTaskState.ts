import { useState, useCallback } from "react";
import { ITask } from "../../@types";

const initialTasksState = [
  {
    text: "Learn React",
    completed: false,
  },
];

export const useTaskstate = () => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasksState);

  function removeTask(taskIndex: number) {
    const tasksOldState = [...tasks];

    tasksOldState.splice(taskIndex, 1);

    setTasks(tasksOldState);
  }

  function toggleChecked(taskIndex: number) {
    const tasksOldState = [...tasks];

    tasksOldState[taskIndex].completed = !tasksOldState[taskIndex].completed;

    setTasks(tasksOldState);
  }

  const addTask = useCallback((todoText: string) => {
    const newTask = {
      text: todoText,
      completed: false,
    };

    setTasks((previous) => [...previous, newTask]);
  }, []);

  return {
    removeTask,
    addTask,
    toggleChecked,
    tasks: tasks,
  };
};
