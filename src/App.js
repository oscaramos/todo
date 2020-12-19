import React  from 'react'
import { Route, Switch } from 'wouter'

import Container from '@material-ui/core/Container'

import Header from './components/Header'
import Footer from './components/Footer'
import DailyTasks from './components/DailyTasks'

import { AddTaskDialogProvider } from './hooks/useAddTaskDialog'
import { EditTaskDialogProvider } from './hooks/useEditTaskDialog'

function Body() {
  return (
    <Switch>
      <Route path='/' component={ DailyTasks } />
      <Route>
        Invalid Route
      </Route>
    </Switch>
  )
}

function DialogProviders({ children }) {
  return (
    <AddTaskDialogProvider>
      <EditTaskDialogProvider>
        { children }
      </EditTaskDialogProvider>
    </AddTaskDialogProvider>
  )
}

function App() {
  return (
    <Container maxWidth='xs'>
      <DialogProviders>
        <Header />
        <Body />
        <Footer />
      </DialogProviders>
    </Container>
  )
}

export default App
