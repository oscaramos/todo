import React from 'react'

import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'skyblue'
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <Grid container justify='space-between' className={classes.root}>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h5' component='h2'>
              Hello Oscar!
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant='subtitle1'>
              Today have no tasks
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container alignItems='center' style={{ height: '100%' }}>
          <Grid item>
            <Avatar>O</Avatar>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
