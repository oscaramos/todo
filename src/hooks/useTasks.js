import React, { useEffect } from 'react'
import { useState, createContext, useContext } from 'react'
import { addDays, addHours, startOfToday } from 'date-fns'
import ls from 'local-storage'

const TasksContext = createContext(undefined)

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      startTime: addDays(addHours(startOfToday(), 7), 0),
      description: 'Go jogging with Christin',
      completed: false,
    },
    {
      startTime: addDays(addHours(startOfToday(), 8), 0),
      description: 'Send project file',
      completed: true,
    },
    {
      startTime: addDays(addHours(startOfToday(), 7), 1),
      description: 'Go jogging with Christin',
      completed: true,
    },
    {
      startTime: addDays(addHours(startOfToday(), 8), 2),
      description: 'Send project file',
      completed: false,
    },
  ])

  const addTask = (newTask) => {
    const newTasks = [
      ...tasks,
      newTask
    ]
    setTasks(newTasks)
  }

  const editTask = (taskIndex, newTask) => {
    const newTasks = [...tasks]
    newTasks[taskIndex] = newTask
    setTasks(newTasks)
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const toggleCompleted = (index) => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  useEffect(() => {
    const lsTasks = ls.get('tasks')

    if (lsTasks) {
      const obtainedTasks = lsTasks.map(task => ({
        ...task,
        startTime: new Date(task.startTime)
      }))

      setTasks(obtainedTasks)
    }
  }, [])

  useEffect(() => {
    const lsTasks = tasks.map(task => ({
      ...task,
      startTime: task.startTime.getTime()
    }))

    ls.set('tasks', lsTasks)
  }, [tasks])

  return (
    <TasksContext.Provider value={ [ tasks, { addTask, editTask, deleteTask, toggleCompleted }] }>
      { children }
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)
  if (context === undefined) {
    throw new Error('useTasks must be within a TasksProvider')
  }
  return context
}
