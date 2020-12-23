import clsx from "clsx";
import { format } from "date-fns";

import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

import { Typography, Grid, IconButton, Paper, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { tags } from "../../constants/tags";
import { useEditTaskDialog } from "../../hooks/dialogs/useEditTaskDialog";
import { useTasks } from "../../hooks/useTasks";

const useStyles = makeStyles(() => ({
  paper: {
    height: "4em",
    boxShadow: "0px 0px 5px 0px rgba(239,222,234,1)",
    color: "white",

    display: "flex",
    flexDirection: "row",
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg, hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0))",

    "&:hover ~ &": {
      backgroundColor: "#74BE4F",
      backgroundImage:
        "linear-gradient(180deg, hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0))",
    },

    "&:hover ~ &:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23aaa'/%3E%3C/svg%3E")`,
      content: "''",
    },
  },
  checkedIcon: {
    backgroundColor: "#91DC5A",
    backgroundImage:
      "linear-gradient(180deg, hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E")`,
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#74BE4F",
    },
  },
  taskCompleted: {
    color: "#cdcdcd",
    textDecoration: "line-through",
  },
  subtitle1: {
    color: "#bcbcbc",
    fontSize: "0.8rem",
  },

  deleteIconContainer: {
    transition: "transform .20s, color .20s",
    "&:hover": {
      backgroundColor: "transparent",
      transform: "scale(1.2, 1.2)",
      color: "red",
    },
  },

  tagColor: {
    width: 6,
    height: "100%",
    overflow: "hidden",
    borderRadius: "4px 0px 0px 4px",
  },
}));

function Task({ task, toggleCompleted, onEdit, onDelete }) {
  const classes = useStyles();

  const tagColor = tags.find((tag) => tag.id === task.tagId).color;

  return (
    <Paper className={classes.paper}>
      <div
        className={classes.tagColor}
        style={{
          backgroundColor: tagColor,
        }}
      />
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item xs={1}>
          <Radio
            checked={task.completed}
            onClick={toggleCompleted}
            icon={<span className={classes.icon} />}
            checkedIcon={
              <span className={clsx(classes.icon, classes.checkedIcon)} />
            }
            disableRipple
          />
        </Grid>

        <Grid item xs={2}>
          <Typography
            variant="subtitle1"
            className={classes.subtitle1}
            align="center"
          >
            {format(task.startTime, "H:mma")}
          </Typography>
        </Grid>

        <Grid item xs={7}>
          <Typography
            variant="body1"
            color="primary"
            className={task.completed ? classes.taskCompleted : undefined}
            onClick={onEdit}
            style={{ cursor: "pointer" }}
          >
            {task.description}
          </Typography>
        </Grid>

        <Grid item xs={2} container justify="flex-end">
          <Grid item>
            <IconButton
              disableRipple
              className={classes.deleteIconContainer}
              onClick={onDelete}
            >
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

function TaskContainer({ task }) {
  const [, { toggleCompleted, deleteTask }] = useTasks();
  const openEditTaskDialog = useEditTaskDialog();

  return (
    <Task
      task={task}
      toggleCompleted={() => toggleCompleted(task.index)}
      onEdit={() => openEditTaskDialog(task.index)}
      onDelete={() => deleteTask(task.index)}
    />
  );
}

export default TaskContainer;
