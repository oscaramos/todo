import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { useTasks } from '../hooks/useTasks'
import { differenceInDays, startOfDay } from 'date-fns'
import Task from './Task'
import { makeStyles } from '@material-ui/core/styles'
import NoTasks from '../assets/NoTasks.png'
import { useEditTaskDialog } from '../hooks/useEditTaskDialog'

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

const getDay = (startTime) => {
  const diff = differenceInDays(startTime, startOfDay(new Date()))

  if (diff === 0) {
    return 'Today'
  } else if (diff === 1) {
    return 'Tomorrow'
  } else {
    return `${diff} days`
  }
}

const addIndex = (task, index) => ({...task, index})

const useStyles = makeStyles(theme => ({
  day: {
    ...theme.typography.h1,
    color: '#A7A4C6',
    fontSize: '0.9rem',
  },
}))

function DailyTasks() {
  const classes = useStyles()
  const [ tasks, { toggleCompleted, deleteTask }] = useTasks()
  const openEditTaskDialog = useEditTaskDialog()

  const categorizedTasks =
    tasks.reduce((acum, task, index) => ({
      ...acum,
      [getDay(task.startTime)]: [
        ...(acum[getDay(task.startTime)] || []),
        addIndex(task, index),
      ],
    }), {})

  if (tasks.length === 0) {
    return (
      <div className={classes.root}>
        <ViewNoTasks />
      </div>
    )
  }

  const handleEditTask = (index) => {
    openEditTaskDialog(index)
  }

  return (
    <Grid container direction='column'>
      {
        Object.entries(categorizedTasks).map(([day, dayTasks], index) => (
          <Grid item container direction='column' key={index}>
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
                dayTasks.map(task => (
                  <Grid item key={task.index}>
                    <Task
                      task={task}
                      toggleCompleted={() => toggleCompleted(task.index)}
                      onEdit={() => handleEditTask(task.index)}
                      onDelete={() => deleteTask(task.index)}
                    />
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default DailyTasks
