import React from 'react'
import { useState, createContext, useContext } from 'react'
import AddTaskDialog from '../components/AddTaskDialog'

const AddTaskDialogContext = createContext(undefined)

export function AddTaskDialogProvider({ children }) {
  const [openAddTask, setOpenAddTask] = useState(false)

  const open = () => {
    setOpenAddTask(true)
  }

  return (
    <AddTaskDialogContext.Provider value={ open }>
      { children }

      <AddTaskDialog
        open={openAddTask}
        onClose={() => setOpenAddTask(false)}
      />
    </AddTaskDialogContext.Provider>
  )
}

export function useAddTaskDialog() {
  const context = useContext(AddTaskDialogContext)
  if (context === undefined) {
    throw new Error('useAddTaskDialog must be within a AddTaskDialogProvider')
  }
  return context
}
