import React from "react";
import { makeStyles } from "@material-ui/styles";

import Paper from "../Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
}))

export default function Summary(props) {
  // const classes = useStyles()
  const { person, response } = props


  return (
    <Paper person={person}>
      <h1>Hello World</h1>
    </Paper>
  )
}