import React from 'react'
import TaskView from './TaskView'

function AddTaskDialog({ open, onSubmit, onClose }) {
  const handleSubmit = (startTime, description) => {
    onSubmit({
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
