import React, { useState } from 'react'

import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'


import AddIcon from '@material-ui/icons/Add'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import addTaskBackgroundSvg from '../assets/curve.svg'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import { DateTimePicker } from '@material-ui/pickers'


const useStyles = makeStyles(theme => ({
  addTaskDialogContainer: {
    width: '100%',
    height: '15em',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 'inherit'
  },
  addTaskDialog: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    padding: 'inherit'
  },
  addTaskBackgroundBody: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
  },
  addTaskBackgroundHead: {
    width: '100%',
    height: '2em',
    backgroundImage: `url(${addTaskBackgroundSvg})`,
    transform: 'scale(1, -1)'
  }
}))


const Footer = ({ addTask }) => {
  const classes = useStyles()

  const [value, setValue] = useState(0)
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div style={{ position: 'fixed', top: 'auto', bottom: 0, left: 0, width: '100%' }}>
      <Container maxWidth='xs' style={{ position: 'relative' }}>
        <Paper square style={{ position: 'relative', overflow: 'visible' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='fullWidth'
            indicatorColor='secondary'
            textColor='secondary'
            aria-label='footer label tabs'
          >
            <Tab icon={<HomeOutlinedIcon />} label='Home' />
            <Tab icon={<AssignmentOutlinedIcon />} label='Task' />
          </Tabs>

          <Grid container style={{ position: 'absolute', top: -25 }} justify='center'>
            <Grid item>
              <Fab color='primary' aria-label='add task' onClick={addTask}>
                <AddIcon fontSize='large' />
              </Fab>
            </Grid>
          </Grid>
        </Paper>
        <div className={classes.addTaskDialogContainer}>
          <div className={classes.addTaskBackgroundHead} />
          <div className={classes.addTaskDialog}>
            <Grid container direction='column'>
              <Grid item>
                <Typography align='center'>
                  Add new task
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  variant='standard'
                  aria-label='description'
                  rows={2}
                  fullWidth
                  multiline
                />
              </Grid>
              <Grid item>
                <Typography>
                  Choose date
                </Typography>
              </Grid>
              <Grid item container direction='row' justify='space-between'>
                <Grid item>
                  <DateTimePicker
                    autoOk
                    ampm={false}
                    disableFuture
                    value={selectedDate}
                    onChange={handleDateChange}
                    label="24h clock"
                  />
                </Grid>
                <Grid item>
                  <DateTimePicker
                    autoOk
                    ampm={false}
                    disableFuture
                    value={selectedDate}
                    onChange={handleDateChange}
                    label="24h clock"
                  />
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className={classes.addTaskBackgroundBody} />
        </div>
      </Container>
    </div>
  )
}

export default Footer
