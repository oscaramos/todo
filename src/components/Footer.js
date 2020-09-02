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


const useStyles = makeStyles(() => ({
  mainContainer: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    left: 0,
    width: '100%'
  }
}))

function Footer({ onOpenAddTaskDialog }) {
  const classes = useStyles()

  const [value, setValue] = useState(0)

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
              <Fab color='primary' aria-label='add task' onClick={onOpenAddTaskDialog}>
                <AddIcon fontSize='large' />
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}

export default Footer
