import React from 'react'
import { useState, createContext, useContext } from 'react'
import EditTaskDialog from '../components/EditTaskDialog'

const EditTaskDialogContext = createContext(undefined)

export function EditTaskDialogProvider({ children }) {
  const [openEditTask, setOpenEditTask] = useState(false)
  const [editTaskIndex, setEditTaskIndex] = useState(0)

  const open = (index) => {
    setOpenEditTask(true)
    setEditTaskIndex(index)
  }

  return (
    <EditTaskDialogContext.Provider value={ open }>
      { children }

      <EditTaskDialog
        open={openEditTask}
        taskIndex={editTaskIndex}
        onClose={() => setOpenEditTask(false)}
      />
    </EditTaskDialogContext.Provider>
  )
}

export function useEditTaskDialog() {
  const context = useContext(EditTaskDialogContext)
  if (context === undefined) {
    throw new Error('useEditTaskDialog must be within a EditTaskDialogProvider')
  }
  return context
}
