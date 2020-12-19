import React from 'react'
import TaskView from './TaskView'
import { useTasks } from '../hooks/useTasks'

function AddTaskDialog({ open, onClose }) {
  const [, { addTask }] = useTasks()

  const handleSubmit = (startTime, description) => {
    addTask({
      startTime,
      description,
      completed: false
    })
    onClose()
  }

  return (
    <TaskView
      onClose={onClose}
      open={open}
      onSubmit={handleSubmit}
      title='Add new task'
      buttonText='Add Task'
    />
  )
}

export default AddTaskDialog
