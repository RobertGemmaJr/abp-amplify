import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Paper } from "@material-ui/core";

import ResetButton from "./ResetButton";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  header: {
    width: "100%",
    marginBottom: theme.spacing(2),
    '& > *': {
      fontWeight: "bold",
    },
  },
}))

// Returns date as a "mm/dd/yyyy" format
function getDate() {
  const today = new Date()
  return (
    String(today.getMonth()+1).padStart(2, "0") + "/" + 
    String(today.getDate()).padStart(2, "0") +  "/" +
    today.getFullYear()
  );
}

export default function MyPaper(props) {
    const classes = useStyles();
    const { setContent, person } = props;

    return (
      <Paper className={classes.paper}>
          <Box display="flex" justifyContent="space-between" className={classes.header}>
            <Typography variant="h5" component="h5">
              {getDate()}
            </Typography>
            <Typography variant="h5" component="h5"> 
              {person.fName + " " + person.lName}
            </Typography>
          </Box>
          {props.children} 
        <ResetButton setContent={setContent}/>
      </Paper>
    )
}