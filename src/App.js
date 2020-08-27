import React from 'react'
import Container from '@material-ui/core/Container'

import Header from './components/Header'
import Tasks from './components/Tasks'
import Footer from './components/Footer'

export default function App() {
  const addTask = () => {

  }

  return (
    <Container maxWidth='xs'>
      <Header />
      <Tasks />
      <Footer addTask={addTask} />
    </Container>
  )
}
