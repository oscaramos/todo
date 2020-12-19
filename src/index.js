import React from "react";
import ReactDOM from "react-dom";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import App from "./App";
import theme from "./theme";
import * as serviceWorker from "./serviceWorker";
import { TasksProvider } from "./hooks/useTasks";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <TasksProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssBaseline />
        <App />
      </MuiPickersUtilsProvider>
    </TasksProvider>
  </ThemeProvider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
