import { Link } from "wouter";

import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 8px",

    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 10px",
    },
  },
  name: {
    color: "#82A0B7",
    fontSize: 18,
  },
  number: {
    fontSize: 12,
  },
}));

function CategoryLink({ name, number, icon, href }) {
  const classes = useStyles();

  return (
    <Link href={href || "#"}>
      <Paper className={classes.container}>
        <div>{icon}</div>
        <Typography variant="subtitle1" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="subtitle1" className={classes.number}>
          {number} tasks
        </Typography>
      </Paper>
    </Link>
  );
}

export default CategoryLink;
