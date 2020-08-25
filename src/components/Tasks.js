import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoTasks from '../assets/NoTasks.png'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Radio from '@material-ui/core/Radio'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    height: '50em',
  },
}))

const useTasksStyles = makeStyles(theme => ({
  paper: {
    height: '5em',
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
      content: "''",
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

function ViewTasks({ tasks, toggleCompleted }) {
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
                tasks.map((task, index) => (
                  <Grid item key={task.description}>
                    <Paper className={classes.paper} variant='outlined'>
                      <Grid container direction='row' alignItems='center' style={{ height: '100%' }}>
                        <Grid item sm={1}>
                          <Radio
                            checked={task.completed}
                            onClick={() => toggleCompleted(index)}
                            icon={<span className={classes.icon} />}
                            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                            disableRipple
                          />
                        </Grid>
                        <Grid item sm={3}>
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

function Tasks() {
  const classes = useStyles()

  const [tasks, setTasks] = useState([
    {
      startTime: '7:00 AM',
      description: 'Go jogging with Christin',
      completed: false
    },
    {
      startTime: '8:00 AM',
      description: 'Send project file',
      completed: true
    },
  ])

  const toggleCompleted = (index) => {
    const newTasks = [ ...tasks ]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  return (
    <div className={classes.root}>
      {
        tasks.length === 0
          ? <ViewNoTasks />
          : <ViewTasks tasks={tasks} toggleCompleted={toggleCompleted} />
      }

    </div>
  )
}

export default Tasks
