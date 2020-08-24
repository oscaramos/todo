import React from 'react'
import Container from '@material-ui/core/Container'

import Header from './components/Header'
import Tasks from './components/Tasks'

export default function App() {
  return (
    <Container maxWidth='xs'>
      <Header />
      <Tasks />
    </Container>
  )
}
