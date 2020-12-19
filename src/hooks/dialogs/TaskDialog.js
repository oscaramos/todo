import React, { useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CancelIcon from '@material-ui/icons/Cancel'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import Slide from '@material-ui/core/Slide'
import { Typography } from '@material-ui/core'
import { DateTimePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'

import addTaskBackgroundSvg from '../../assets/curve.svg'

const useStyles = makeStyles(theme => ({
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
  title: {
    ...theme.typography.h1,
    fontSize: '1rem',
  },
  dialog: {
    width: '100%',
    paddingLeft: '2em',
    paddingRight: '2em',
  },
  button: {
    background: 'linear-gradient(90deg, rgba(126,182,255,1) 50%, rgba(95,135,231,1) 100%)',
    color: 'white',
    height: '3.5em',
  },
  backgroundHead: {
    width: '100%',
    height: '4em',
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
  iconCloseContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    display: 'flex',
    left: 0,
    top: -40,
    justifyContent: 'center',
  },
  iconCloseButton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  iconClose: {
    color: '#ED38B1',
    fontSize: '4rem',
    background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 40%,rgba(255,255,255,0) 50%)',
  },
}))

const Transition = React.forwardRef((props, ref) =>
  <Slide direction='up' ref={ref} {...props} />,
)

function TaskDialog({ onSubmit, onClose, open, title, buttonText, initialTask }) {
  const classes = useStyles()

  const [startTime, setStartTime] = useState(new Date())
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    onSubmit(startTime, description)
  }

  useEffect(() => {
    if (initialTask) {
      setStartTime(initialTask.startTime)
      setDescription(initialTask.description)
    }
  }, [initialTask])

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby='task-dialog'
      TransitionComponent={Transition}
      open={open}
    >
      <div className={classes.mainContainer}>
        <Container maxWidth='xs' style={{ position: 'relative' }}>
          <div className={classes.dialogContainer}>
            <div className={classes.iconCloseContainer}>
              <IconButton disableRipple className={classes.iconCloseButton} onClick={onClose}>
                <CancelIcon className={classes.iconClose} />
              </IconButton>
            </div>

            <div className={classes.backgroundHead} />

            <div style={{ position: 'relative' }}>
              <div className={classes.dialog}>
                <Grid container direction='column' spacing={2}>
                  <Grid item>
                    <Typography align='center' className={classes.title}>
                      { title }
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

                  <Grid item container direction='row' justify='space-between' style={{ marginBottom: '1em' }}>
                    <Grid item>
                      <DateTimePicker
                        autoOk
                        ampm={false}
                        value={startTime}
                        onChange={setStartTime}
                        label='Start at'
                        format='EEEE, HH:mm'
                        disablePast
                      />
                    </Grid>
                  </Grid>

                  <Grid item container justify='center'>
                    <Grid item style={{ width: '80%' }}>
                      <Button className={classes.button} variant='contained' fullWidth onClick={handleSubmit}>
                        { buttonText }
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
    </Dialog>
  )
}

export default TaskDialog
