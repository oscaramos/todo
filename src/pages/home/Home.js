import { differenceInDays, startOfDay } from "date-fns";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useTasks } from "../../hooks/useTasks";
import NoTasks from "./NoTasks";
import Task from "./Task";

const getDay = (startTime) => {
  const diff = differenceInDays(startTime, startOfDay(new Date()));

  if (diff === 0) {
    return "Today";
  } else if (diff === 1) {
    return "Tomorrow";
  } else {
    return `${diff} days`;
  }
};

const addIndex = (task, index) => ({ ...task, index });

const useStyles = makeStyles((theme) => ({
  day: {
    ...theme.typography.h1,
    color: "#A7A4C6",
    fontSize: "0.9rem",
  },
}));

function Home() {
  const classes = useStyles();
  const [tasks] = useTasks();

  // grouped by day
  const groupedTasks = tasks.reduce(
    (acum, task, index) => ({
      ...acum,
      [getDay(task.startTime)]: [
        ...(acum[getDay(task.startTime)] || []),
        addIndex(task, index),
      ],
    }),
    {}
  );

  if (tasks.length === 0) {
    return <NoTasks />;
  }

  return (
    <Grid container direction="column">
      {Object.entries(groupedTasks).map(([day, dayTasks], index) => (
        <Grid item container direction="column" key={index}>
          <Grid item>
            <div style={{ width: "100%", height: "1em" }} />
          </Grid>
          <Grid item>
            <Typography className={classes.day}>{day}</Typography>
          </Grid>
          <Grid item container direction="column" spacing={1}>
            {dayTasks.map((task) => (
              <Grid item key={task.index}>
                <Task index={task.index} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default Home;
