import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colorValues } from "./utils";

const buildShadow = (color) => {
  const [r, g, b] = colorValues(color);

  return `rgba(0, 0, 0, 0.1) 0px 0px 25px -5px, rgba(${r}, ${g}, ${b}, 0.20) 0px 10px 10px -5px`;
};

const useSelectedTagStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 5,
    padding: "2px 8px",
    cursor: "pointer",
  },
  text: {
    ...theme.typography.subtitle1,
    fontSize: 14,
    color: "white",
  },
}));

const useTagStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    cursor: "pointer",
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 50,
  },
  text: {
    ...theme.typography.subtitle1,
    fontSize: 14,
    marginLeft: 4,
  },
}));

export function Tag({ color, children, selected, onChange }) {
  const classes = useTagStyles();
  const selectedClasses = useSelectedTagStyles();

  if (selected) {
    return (
      <div
        className={selectedClasses.container}
        style={{
          backgroundColor: color,
          boxShadow: buildShadow(color),
        }}
      >
        <div className={selectedClasses.text}>{children}</div>
      </div>
    );
  } else {
    return (
      <div className={classes.container} onClick={onChange}>
        <div className={classes.circle} style={{ backgroundColor: color }} />
        <div className={classes.text}>{children}</div>
      </div>
    );
  }
}

const useTagsStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
}));

export function Tags({ value, onChange, children }) {
  const classes = useTagsStyles();

  return (
    <div className={classes.container}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          selected: value === index,
          onChange: () => onChange(index),
        })
      )}
    </div>
  );
}
