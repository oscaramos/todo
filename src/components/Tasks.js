import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoTasks from '../assets/NoTasks.png'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: '50em'
  }
}))


const Tasks = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container direction='column' alignItems='center' justify='center' style={{ height: '100%' }}>
        <Grid item>
          <img src={NoTasks} alt='no-tasks' />
        </Grid>

        <Grid item>
          <Grid container direction='column' alignItems='center'>
            <Grid item>
              <Typography variant="h4" component="h1">
                No Tasks
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                You have no tasks to do
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Tasks
