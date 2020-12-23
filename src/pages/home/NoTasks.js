import React from "react";
import Grid from "@material-ui/core/Grid";
import NoTasksImage from "../../assets/NoTasks.png";
import { Typography } from "@material-ui/core";
import { useTasks } from "../../hooks/useTasks";

function NoTasks() {
  const [, { resetTasks }] = useTasks();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ height: "100%" }}
    >
      <Grid item>
        <img src={NoTasksImage} alt="no-tasks" />
      </Grid>

      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h4" component="h1">
              No Tasks
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">You have no tasks to do</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              style={{ cursor: "pointer", color: "#1976D2" }}
              onClick={resetTasks}
            >
              Reset initial tasks
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NoTasks;
