import { useState, createContext, useContext } from "react";

import { useTasks } from "../useTasks";
import TaskDialog from "./TaskDialog/TaskDialog";

function AddTaskDialog({ onClose }) {
  const [, { addTask }] = useTasks();

  const handleSubmit = (data) => {
    addTask({
      ...data,
      completed: false,
    });
    onClose();
  };

  return (
    <TaskDialog
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Add new task"
      buttonText="Add Task"
      open
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

      {open && <AddTaskDialog onClose={() => setOpen(false)} />}
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
