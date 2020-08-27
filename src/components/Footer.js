import React, { useState } from 'react'

import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'


import AddIcon from '@material-ui/icons/Add'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'



const Footer = ({ addTask }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ position: 'fixed', top: 'auto', bottom: 0, left: 0, width: '100%' }}>
      <Container maxWidth='xs'>
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
      </Container>
    </div>
  )
}

export default Footer
