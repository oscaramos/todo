import React from "react";
import { useState, createContext, useContext } from "react";
import { useTasks } from "../useTasks";
import TaskDialog from "./TaskDialog/TaskDialog";

function EditTaskDialog({ onClose, taskIndex }) {
  const [tasks, { editTask }] = useTasks();

  const task = tasks[taskIndex];

  const handleSubmit = (data) => {
    editTask(taskIndex, {
      ...data,
      completed: false,
    });
    onClose();
  };

  return (
    <TaskDialog
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Edit task"
      buttonText="Edit task"
      initialTask={task}
    />
  );
}

const EditTaskDialogContext = createContext(undefined);

export function EditTaskDialogProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openDialog = (index) => {
    setOpen(true);
    setIndex(index);
  };

  return (
    <EditTaskDialogContext.Provider value={openDialog}>
      {children}

      {open && (
        <EditTaskDialog taskIndex={index} onClose={() => setOpen(false)} />
      )}
    </EditTaskDialogContext.Provider>
  );
}

export function useEditTaskDialog() {
  const context = useContext(EditTaskDialogContext);
  if (context === undefined) {
    throw new Error(
      "useEditTaskDialog must be within a EditTaskDialogProvider"
    );
  }
  return context;
}
