import React from "react";
import { useLocalStorage } from "react-recipes";
import { Route, Switch } from "wouter";

import Container from "@material-ui/core/Container";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { AddTaskDialogProvider } from "./hooks/dialogs/useAddTaskDialog";
import { EditTaskDialogProvider } from "./hooks/dialogs/useEditTaskDialog";
import Home from "./pages/home/Home";
import Onboarding from "./pages/onboarding/Onboarding";

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
