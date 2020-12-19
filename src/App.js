import React from "react";
import { Route, Switch } from "wouter";
import { useLocalStorage } from "react-recipes";

import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home/Home";
import Onboarding from "./pages/onboarding/Onboarding";

import { AddTaskDialogProvider } from "./hooks/dialogs/useAddTaskDialog";
import { EditTaskDialogProvider } from "./hooks/dialogs/useEditTaskDialog";

function Body() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>Invalid Route</Route>
    </Switch>
  );
}

function DialogProviders({ children }) {
  return (
    <AddTaskDialogProvider>
      <EditTaskDialogProvider>{children}</EditTaskDialogProvider>
    </AddTaskDialogProvider>
  );
}

function App() {
  const [showOnboarding, setShowOnboarding] = useLocalStorage(
    "showOnboarding",
    true
  );

  if (showOnboarding) {
    return <Onboarding onHideOnboarding={() => setShowOnboarding(false)} />;
  }

  return (
    <Container maxWidth="xs">
      <DialogProviders>
        <Header />
        <Body />
        <Footer />
      </DialogProviders>
    </Container>
  );
}

export default App;
