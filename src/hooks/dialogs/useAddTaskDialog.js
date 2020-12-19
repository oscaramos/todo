import React from "react";
import { useState, createContext, useContext } from "react";
import { useTasks } from "../useTasks";
import TaskDialog from "./TaskDialog";

function AddTaskDialog({ open, onClose }) {
  const [, { addTask }] = useTasks();

  const handleSubmit = (startTime, description) => {
    addTask({
      startTime,
      description,
      completed: false,
    });
    onClose();
  };

  return (
    <TaskDialog
      onClose={onClose}
      open={open}
      onSubmit={handleSubmit}
      title="Add new task"
      buttonText="Add Task"
    />
  );
}

const AddTaskDialogContext = createContext(undefined);

export function AddTaskDialogProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <AddTaskDialogContext.Provider value={openDialog}>
      {children}

      <AddTaskDialog open={open} onClose={() => setOpen(false)} />
    </AddTaskDialogContext.Provider>
  );
}

export function useAddTaskDialog() {
  const context = useContext(AddTaskDialogContext);
  if (context === undefined) {
    throw new Error("useAddTaskDialog must be within a AddTaskDialogProvider");
  }
  return context;
}
