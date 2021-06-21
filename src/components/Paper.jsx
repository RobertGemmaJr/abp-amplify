import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Paper } from "@material-ui/core";

import ResetButton from "components/ResetButton"

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    '& > *': {
      fontWeight: "bold",
    },
    text: {
      margin: theme.spacing(3),
      fontSize: 30,
      fontWeight: "bold",
      alignContent: "center",
    },
    answer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
  
      '& > *': {
        margin: theme.spacing(2, 5),
      },
    },
  }
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
        <Box color="primary" className={classes.header}>
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