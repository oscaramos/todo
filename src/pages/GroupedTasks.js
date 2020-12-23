import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NoTasks from "./home/NoTasks";
import Task from "./home/Task";

const useStyles = makeStyles((theme) => ({
  day: {
    ...theme.typography.h1,
    color: "#A7A4C6",
    fontSize: "0.9rem",
  },
}));

function GroupedTasks({ tasks }) {
  const classes = useStyles();

  if (Object.keys(tasks).length === 0) {
    return <NoTasks />;
  }

  return (
    <Grid container direction="column">
      {Object.entries(tasks).map(([groupName, groupTasks]) => (
        <Grid item container direction="column" key={groupName}>
          <Grid item>
            <div style={{ width: "100%", height: "1em" }} />
          </Grid>
          <Grid item>
            <Typography className={classes.day}>{groupName}</Typography>
          </Grid>
          <Grid item container direction="column" spacing={1}>
            {groupTasks.map((task) => (
              <Grid item key={task.index}>
                <Task task={task} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default GroupedTasks;
