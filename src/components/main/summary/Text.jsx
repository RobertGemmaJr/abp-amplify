import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  typography: {
    width: "100%",
    fontSize: 14,
  },
  bold: {
    fontWeight: "bold"
  },
  failed: {
    fontWeight: "bold",
    color: "red",
  }
}))

export default function Text(props) {
  const classes = useStyles()
  const { title, body, settings } = props

  function checkTemperatureFailed() {
    if(settings.recordTemperature) {
      if(settings.keepTemperature) {
        if(Math.abs(Number.parseFloat(body) - 98.6) > settings.tempTolerance) {
          return true;
        }
      } else { if(body === "Failed") return true; }
    }
  }

  return (
    <Typography variant="subtitle1" className={classes.typography}>
      <span className={classes.bold}>{title}</span>
      <span className={(settings && checkTemperatureFailed()) ? classes.failed : null}>
        {body}
      </span>
    </Typography>
  )
}