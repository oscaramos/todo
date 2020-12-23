import React, { useState } from "react";

import CancelIcon from "@material-ui/icons/Cancel";

import {
  Typography,
  Button,
  Container,
  Dialog,
  Grid,
  IconButton,
  Slide,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DateTimePicker } from "@material-ui/pickers";

import addTaskBackgroundSvg from "../../../assets/curve.svg";
import { tags } from "../../../constants/tags";
import { Tag, Tags } from "./Tags";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  dialogContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 0,
    zIndex: 1,
  },
  title: {
    ...theme.typography.h1,
    fontSize: "1rem",
  },
  dialog: {
    width: "100%",
    paddingLeft: "2em",
    paddingRight: "2em",
  },
  button: {
    background:
      "linear-gradient(90deg, rgba(126,182,255,1) 50%, rgba(95,135,231,1) 100%)",
    color: "white",
    height: "3.5em",
  },
  backgroundHead: {
    width: "100%",
    height: "4em",
    backgroundImage: `url(${addTaskBackgroundSvg})`,
    transform: "scale(1, -1)",
  },
  backgroundBody: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
  iconCloseContainer: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    display: "flex",
    left: 0,
    top: -40,
    justifyContent: "center",
  },
  iconCloseButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  iconClose: {
    color: "#ED38B1",
    fontSize: "4rem",
    background:
      "radial-gradient(ellipse at center, rgba(255,255,255,1) 40%,rgba(255,255,255,0) 50%)",
  },
}));

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

function TaskDialog({ onSubmit, onClose, title, buttonText, initialTask }) {
  const classes = useStyles();

  const [startTime, setStartTime] = useState(
    initialTask?.startTime ?? new Date()
  );
  const [description, setDescription] = useState(
    initialTask?.description ?? ""
  );
  const [tagId, setTagId] = useState(initialTask?.tagId ?? 0);

  const [exiting, setExiting] = useState(false);

  const handleSubmit = () => {
    onSubmit({ startTime, description, tagId });
  };

  const handleClose = () => {
    setExiting(true);
    setTimeout(() => {
      onClose();
    }, 500); // transition's time
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="task-dialog"
      TransitionComponent={Transition}
      open={!exiting}
    >
      <div className={classes.container}>
        <Container maxWidth="xs" style={{ position: "relative" }}>
          <div className={classes.dialogContainer}>
            <div className={classes.iconCloseContainer}>
              <IconButton
                disableRipple
                className={classes.iconCloseButton}
                onClick={handleClose}
              >
                <CancelIcon className={classes.iconClose} />
              </IconButton>
            </div>

            <div className={classes.backgroundHead} />

            <div style={{ position: "relative" }}>
              <div className={classes.dialog}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography align="center" className={classes.title}>
                      {title}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <TextField
                      variant="standard"
                      label="Description"
                      aria-label="description"
                      fullWidth
                      multiline
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Grid>

                  <Grid item>
                    <Tags value={tagId} onChange={(newTag) => setTagId(newTag)}>
                      {tags.map((tag) => (
                        <Tag color={tag.color} key={tag.id}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Tags>
                  </Grid>

                  <Grid
                    item
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginBottom: "1em" }}
                  >
                    <Grid item>
                      <DateTimePicker
                        autoOk
                        ampm={false}
                        value={startTime}
                        onChange={setStartTime}
                        label="Start at"
                        format="EEEE, HH:mm"
                        disablePast
                      />
                    </Grid>
                  </Grid>

                  <Grid item container justify="center">
                    <Grid item style={{ width: "80%" }}>
                      <Button
                        className={classes.button}
                        variant="contained"
                        fullWidth
                        onClick={handleSubmit}
                      >
                        {buttonText}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.backgroundBody} />
              <div style={{ width: "100%", height: "2em" }} />
            </div>
          </div>
        </Container>
      </div>
    </Dialog>
  );
}

export default TaskDialog;
