import React from 'react'
import clsx from 'clsx'
import { format, startOfDay, differenceInDays } from 'date-fns';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Radio from '@material-ui/core/Radio'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import NoTasks from '../assets/NoTasks.png'

const useStyles = makeStyles(() => ({
  root: {
    height: '50em',
  },
}))

const useTasksStyles = makeStyles(theme => ({
  paper: {
    height: '4em',
    boxShadow: '0px 0px 5px 0px rgba(239,222,234,1)',
    color: 'white',
  },
  icon: {
    'borderRadius': '50%',
    'width': 16,
    'height': 16,
    'boxShadow': 'inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1)',
    'backgroundColor': '#f5f8fa',
    'backgroundImage': 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0))',

    '&:hover ~ &': {
      backgroundColor: '#74BE4F',
      backgroundImage: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0))',
    },

    '&:hover ~ &:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23aaa'/%3E%3C/svg%3E")`,
      content: '\'\'',
    },
  },
  checkedIcon: {
    backgroundColor: '#91DC5A',
    backgroundImage: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E")`,
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#74BE4F',
    },
  },
  taskCompleted: {
    color: '#cdcdcd',
    textDecoration: 'line-through',
  },
  subtitle1: {
    color: '#bcbcbc',
    fontSize: '0.8rem',
  },
  day: {
    ...theme.typography.h1,
    color: '#A7A4C6',
    fontSize: '0.9rem',
  },
  deleteIconContainer: {
    transition: 'transform .20s, color .20s',
    '&:hover': {
      backgroundColor: 'transparent',
      transform: 'scale(1.2, 1.2)',
      color: 'red'
    }
  }
}))


function ViewNoTasks() {
  return (
    <Grid container direction='column' alignItems='center' justify='center' style={{ height: '100%' }}>
      <Grid item>
        <img src={NoTasks} alt='no-tasks' />
      </Grid>

      <Grid item>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <Typography variant='h4' component='h1'>
              No Tasks
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'>
              You have no tasks to do
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

function ViewTasks({ tasks, toggleCompleted, onEditTask, onDeleteTask }) {
  const classes = useTasksStyles()

  return (
    <Grid container direction='column'>
      {
        Object.entries(tasks).map(([day, dayTasks]) => (
          <React.Fragment key={day}>
            <Grid item>
              <div style={{ width: '100%', height: '1em' }} />
            </Grid>
            <Grid item>
              <Typography className={classes.day}>
                {day}
              </Typography>
            </Grid>
            <Grid item container direction='column' spacing={1}>
              {
                dayTasks.map((task, index) => (
                  <Grid item key={index}>
                    <Paper className={classes.paper}>
                      <Grid container direction='row' alignItems='center' style={{ height: '100%' }}>
                        <Grid item sm={1}>
                          <Radio
                            checked={task.completed}
                            onClick={() => toggleCompleted(task.index)}
                            icon={<span className={classes.icon} />}
                            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                            disableRipple
                          />
                        </Grid>

                        <Grid item sm={2}>
                          <Typography
                            variant='subtitle1'
                            className={classes.subtitle1}
                            align='center'
                          >
                            {format(task.startTime, 'H:mma')}
                          </Typography>
                        </Grid>

                        <Grid item sm={7}>
                          <Typography
                            variant='body1'
                            color='primary'
                            className={task.completed ? classes.taskCompleted : undefined}
                            onClick={() => onEditTask(task.index)}
                            style={{ cursor: 'pointer' }}
                          >
                            {task.description}
                          </Typography>
                        </Grid>

                        <Grid item sm={2} container justify='flex-end'>
                          <Grid item>
                            <IconButton disableRipple className={classes.deleteIconContainer} onClick={() => onDeleteTask(task.index)}>
                              <DeleteOutlineOutlinedIcon fontSize='small' />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
          </React.Fragment>
        ))
      }
    </Grid>
  )
}

function Tasks({ tasks, toggleCompleted, onEditTask, onDeleteTask }) {
  const classes = useStyles()

  const getDay = (startTime) => {
    const diff = differenceInDays(startTime, startOfDay(new Date()))

    if (diff === 0) {
      return 'Today'
    } else if(diff === 1) {
      return 'Tomorrow'
    } else {
      return `${diff} days`
    }
  }

  const categorizedTasks =
    tasks.reduce((acum, task, index) => {
      return {
        ...acum,
        [getDay(task.startTime)]: [
          ...(acum[getDay(task.startTime)] || [] ),
          {
            ...task,
            index
          }
        ]
      }
    }, {})

  return (
    <div className={classes.root}>
      {
        tasks.length === 0
          ? <ViewNoTasks />
          : <ViewTasks
              tasks={categorizedTasks}
              toggleCompleted={toggleCompleted}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
          />
      }
    </div>
  )
}

export default Tasks
