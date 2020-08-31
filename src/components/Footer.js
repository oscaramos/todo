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
import Button from '@material-ui/core/Button'
import * as PropTypes from 'prop-types'


const useStyles = makeStyles(() => ({
  mainContainer: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    left: 0,
    width: '100%'
  }
}))

const useTaskDialogStyles = makeStyles(() => ({
  dialogContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 'inherit',
    zIndex: 1
  },
  dialog: {
    width: '100%',
    padding: 'inherit'
  },
  button: {
    background: 'linear-gradient(90deg, rgba(126,182,255,1) 50%, rgba(95,135,231,1) 100%)'
  },
  backgroundHead: {
    width: '100%',
    height: '2em',
    backgroundImage: `url(${addTaskBackgroundSvg})`,
    transform: 'scale(1, -1)'
  },
  backgroundBody: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: -1
  }
}))


function AddTaskDialog({ onChange, value }) {
  const classes = useTaskDialogStyles()
  return (
    <div className={classes.dialogContainer}>
      <div className={classes.backgroundHead} />
      <div style={{ position: 'relative ' }}>
        <div className={classes.dialog}>
          <Grid container direction='column' spacing={2}>
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
                  value={value}
                  onChange={onChange}
                  label='24h clock'
                />
              </Grid>
              <Grid item>
                <DateTimePicker
                  autoOk
                  ampm={false}
                  disableFuture
                  value={value}
                  onChange={onChange}
                  label='24h clock'
                />
              </Grid>
            </Grid>
            <Grid item container justify='center'>
              <Grid item container>
                <Button className={classes.button} variant='contained' fullWidth>
                  Add task
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.backgroundBody} />
        <div style={{ width: '100%', height: '2em'}} />
      </div>
    </div>
  )
}

AddTaskDialog.propTypes = {
  classes: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
}
const Footer = ({ addTask }) => {
  const classes = useStyles()

  const [value, setValue] = useState(0)
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.mainContainer}>
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

        <AddTaskDialog value={selectedDate} onChange={handleDateChange} />
      </Container>
    </div>
  )
}

export default Footer
