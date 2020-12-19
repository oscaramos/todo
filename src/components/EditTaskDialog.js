import React from 'react'
import TaskView from './TaskView'
import { useTasks } from '../hooks/useTasks'

function EditTaskDialog({ open, onClose, taskIndex }) {
  const [tasks, { editTask }] = useTasks()

  const task = tasks[taskIndex]

  const handleSubmit = (startTime, description) => {
    editTask(taskIndex, {
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
