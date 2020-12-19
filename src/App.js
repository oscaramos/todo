import React, { useState } from 'react'

import Container from '@material-ui/core/Container'

import Header from './components/Header'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import AddTaskDialog from './components/AddTaskDialog'
import EditTaskDialog from './components/EditTaskDialog'
import { useTasks } from './hooks/useTasks'

function App() {
  const [route, setRoute] = useState('task')
  const [tasks] = useTasks()

  const [openAddTask, setOpenAddTask] = useState(false)
  const [openEditTask, setOpenEditTask] = useState(false)
  const [editTaskIndex, setEditTaskIndex] = useState(0)

  const handleEditTask = (index) => {
    setOpenEditTask(true)
    setEditTaskIndex(index)
  }

  return (
    <Container maxWidth='xs'>
      <Header />
      <Tasks
        onEditTask={handleEditTask}
        route={route}
      />
      <Footer
        onOpenAddTaskDialog={() => setOpenAddTask(true)}
        setRoute={setRoute}
      />

      <AddTaskDialog
        open={openAddTask}
        onClose={() => setOpenAddTask(false)}
      />
      <EditTaskDialog
        task={tasks[editTaskIndex]}
        taskIndex={editTaskIndex}
        open={openEditTask}
        onClose={() => setOpenEditTask(false)}
      />
    </Container>
  )
}

export default App
