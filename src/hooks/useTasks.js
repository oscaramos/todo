import { addDays, addHours, startOfToday } from "date-fns";
import ls from "local-storage";
import { createContext, useContext, useEffect } from "react";
import { useArray } from "react-recipes";

const TasksContext = createContext(undefined);

const initialArray = [
  {
    startTime: addDays(addHours(startOfToday(), 7), 0),
    description: "Go jogging with Christin",
    completed: false,
    tagId: 0,
  },
  {
    startTime: addDays(addHours(startOfToday(), 8), 0),
    description: "Send project file",
    completed: true,
    tagId: 1,
  },
  {
    startTime: addDays(addHours(startOfToday(), 7), 1),
    description: "Meeting with client",
    completed: true,
    tagId: 2,
  },
  {
    startTime: addDays(addHours(startOfToday(), 8), 2),
    description: "Email client",
    completed: false,
    tagId: 1,
  },
];

export function TasksProvider({ children }) {
  const { add, removeIndex, value: tasks, setValue: setTasks } = useArray(
    initialArray
  );

  const addTask = (newTask) => {
    add(newTask);
  };

  const editTask = (taskIndex, newTask) => {
    const newTasks = [...tasks];
    newTasks[taskIndex] = newTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    removeIndex(index);
  };

  const toggleCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const resetTasks = () => {
    setTasks(initialArray);
  };

  useEffect(() => {
    const lsTasks = ls.get("tasks");

    if (lsTasks) {
      setTasks(
        lsTasks.map((task) => ({
          ...task,
          startTime: new Date(task.startTime),
        }))
      );
    }
  }, []);

  useEffect(() => {
    ls.set(
      "tasks",
      tasks.map((task) => ({
        ...task,
        startTime: task.startTime.getTime(),
      }))
    );
  }, [tasks]);

  const tasksWithIndex = tasks.map((task, index) => ({ ...task, index }));

  return (
    <TasksContext.Provider
      value={[
        tasksWithIndex,
        { addTask, editTask, deleteTask, toggleCompleted, resetTasks },
      ]}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be within a TasksProvider");
  }
  return context;
}
