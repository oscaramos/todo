import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DateTimePicker } from '@material-ui/pickers'

import addTaskBackgroundSvg from '../assets/curve.svg'

const useTaskDialogStyles = makeStyles(() => ({
  mainContainer: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  dialogContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 'inherit',
    zIndex: 1,
  },
  dialog: {
    width: '100%',
    padding: 'inherit',
  },
  button: {
    background: 'linear-gradient(90deg, rgba(126,182,255,1) 50%, rgba(95,135,231,1) 100%)',
    color: 'white',
    height: '3.5em',
  },
  backgroundHead: {
    width: '100%',
    height: '2em',
    backgroundImage: `url(${addTaskBackgroundSvg})`,
    transform: 'scale(1, -1)',
  },
  backgroundBody: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },
}))

function AddTaskDialog({ onSubmit }) {
  const classes = useTaskDialogStyles()
  const [startTime, setStartTime] = useState(new Date())
  const [description, setDescription] = useState('')

  function handleClick() {
    onSubmit({
      startTime,
      description
    })
  }

  return (
    <div className={classes.mainContainer}>
      <Container maxWidth='xs' style={{ position: 'relative' }}>
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
                    label='description'
                    aria-label='description'
                    fullWidth
                    multiline
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </Grid>
                <Grid item container direction='row' justify='space-between'>
                  <Grid item>
                    <DateTimePicker
                      autoOk
                      ampm={false}
                      value={startTime}
                      onChange={setStartTime}
                      label='Start at'
                      format='EEEE, HH:mm'
                      disableFuture
                    />
                  </Grid>
                </Grid>
                <Grid item container justify='center'>
                  <Grid item style={{ width: '80%' }}>
                    <Button className={classes.button} variant='contained' fullWidth onClick={handleClick}>
                      Add task
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div className={classes.backgroundBody} />
            <div style={{ width: '100%', height: '2em' }} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AddTaskDialog
