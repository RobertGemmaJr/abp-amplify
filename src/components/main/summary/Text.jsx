import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  typography: {
    width: "100%",
    textAlign: "left",
    fontSize: 14,
  },
  bold: {
    fontWeight: "bold"
  },
}))

export default function Text(props) {
  const classes = useStyles()
  const { title, body } = props

  return (
    <Typography variant="subtitle1" className={classes.typography}>
      <span className={classes.bold}>{title}</span>
      <span >{body}</span>
    </Typography>
  )
}