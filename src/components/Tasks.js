import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoTasks from '../assets/NoTasks.png'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    height: '50em',
  },
}))

const useTasksStyles = makeStyles(theme => ({
  paper: {
    height: '5em',
  },
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

function ViewTasks({ tasks }) {
  const classes = useTasksStyles()

  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            Today
          </Grid>

          <Grid item>
            {/*----- Today Tasks -----*/}
            <Grid container direction='column' spacing={2}>
              {
                tasks.map(task => (
                  <Grid item key={task.description}>
                    <Paper className={classes.paper} variant='outlined'>
                      <Grid container direction='row' alignItems='center' style={{ height: '100%' }}>
                        <Grid item style={{ width: '2em' }}>
                          ok?
                        </Grid>
                        <Grid item style={{ width: '6em' }}>
                          <Typography variant='subtitle1'>
                            {task.startTime}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='body1' color='primary'>
                            {task.description}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const Tasks = () => {
  const classes = useStyles()
  const [tasks, setTasks] = useState([
    {
      startTime: '7:00 AM',
      description: 'Go jogging with Christin',
    },
    {
      startTime: '8:00 AM',
      description: 'Send project file',
    },
  ])
  return (
    <div className={classes.root}>
      {
        tasks.length === 0
          ? <ViewNoTasks />
          : <ViewTasks tasks={tasks} />
      }

    </div>
  )
}

export default Tasks
