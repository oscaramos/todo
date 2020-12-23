import { useEffect, useState } from "react";
import { useLocation } from "wouter";

import AddIcon from "@material-ui/icons/Add";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

import {
  Container,
  Fab,
  Grid,
  Paper,
  Tab,
  Tabs,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";

import { useAddTaskDialog } from "../hooks/dialogs/useAddTaskDialog";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  tab: {
    ...theme.typography.body1,
    fontSize: "0.9rem",
  },
}));

function Footer() {
  const classes = useStyles();

  const [, setLocation] = useLocation();

  const openAddTaskDialog = useAddTaskDialog();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value === 0) {
      setLocation("/");
    } else {
      setLocation("/tasks");
    }
  }, [value, setLocation]);

  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.container}>
      <Container
        maxWidth="xs"
        style={{ position: "relative", padding: matchesXS ? 0 : undefined }}
      >
        <Paper square style={{ position: "relative", overflow: "visible" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="footer label tabs"
          >
            <Tab
              icon={<HomeOutlinedIcon />}
              label="Home"
              className={classes.tab}
            />
            <Tab
              icon={<AssignmentOutlinedIcon />}
              label="Task"
              className={classes.tab}
            />
          </Tabs>

          <Grid
            container
            style={{ position: "absolute", top: -25 }}
            justify="center"
          >
            <Grid item>
              <Fab
                color="primary"
                aria-label="add task"
                onClick={openAddTaskDialog}
              >
                <AddIcon fontSize="large" />
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default Footer;
