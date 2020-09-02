import React, { useState } from 'react'
import Container from '@material-ui/core/Container'

import Header from './components/Header'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import AddTaskDialog from './components/AddTaskDialog'

import { addHours, startOfToday, addDays } from 'date-fns'

function App() {
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

  const [openAddTask, setOpenAddTask] = useState(false)

  const addTask = (newTask) => {
    const newTasks = [
      ...tasks,
      {
        startTime: newTask.startTime,
        description: newTask.description,
        completed: false,
      }
    ]
    setTasks(newTasks)
  }

  const toggleCompleted = (day, index) => {
    const newTasks = [ ...tasks ]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  return (
    <Container maxWidth='xs'>
      <Header />
      <Tasks tasks={tasks} toggleCompleted={toggleCompleted}/>
      <Footer
        onOpenAddTaskDialog={() => setOpenAddTask(true)}
      />
      <AddTaskDialog
        open={openAddTask}
        onSubmit={addTask}
        onClose={() => setOpenAddTask(false)}
      />
    </Container>
  )
}

export default App
