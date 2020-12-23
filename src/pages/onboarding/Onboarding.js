import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as OnboardingBook } from "../../assets/Onboarding.svg";

const useStyles = makeStyles(() => ({
  button: {
    background:
      "linear-gradient(90deg, rgba(93,230,26,1) 0%, rgba(57,169,1,1) 100%)",
    width: "100%",
    height: 48,
    color: "white",
    fontSize: 16,
    outline: "none",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    transition: "all 0.3s",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));

function Onboarding({ onHideOnboarding }) {
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <Grid
        container
        direction="column"
        align="center"
        justify="center"
        style={{ height: "80vh" }}
      >
        <Grid item>
          <OnboardingBook />
        </Grid>
        <Grid item style={{ marginTop: 64 }}>
          <Typography variant="h4">Reminders made simple</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            pellentesque erat in blandit luctus.
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: 32 }}>
          <button className={classes.button} onClick={onHideOnboarding}>
            Get Started
          </button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Onboarding;
