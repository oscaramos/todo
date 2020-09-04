import React from 'react'
import TaskView from './TaskView'

function EditTaskDialog({ open, onSubmit, onClose, task, taskIndex }) {
  const handleSubmit = (startTime, description) => {
    onSubmit(taskIndex, {
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
      title='Edit task'
      buttonText='Edit task'
      initialTask={task}
    />
  )
}

export default EditTaskDialog
