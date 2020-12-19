import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  mainContainer: {
    paddingTop: "2em",
    paddingBottom: "1em",
    paddingLeft: "1em",
    paddingRight: "1em",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Typography variant="h1" align="center">
        Tasks to do
      </Typography>
    </div>
  );
}

export default Header;
