import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Box, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0, 1),
  }
}))

export default function ExportByDate(props) {
  const classes = useStyles();
  const {state, setState} = props;

  // Handle change for text items
  const handleTextChange = (event) => {
    setState({...state, [event.target.name]: event.target.value })
  }

  // Handle export button clicked by date
  function handleClick() {
  
  }

  return(
    <Box display="flex" justifyContent="center">
        <TextField
          id="start-date"
          name="startDate"
          label="Start Date" 
          type="date"
          value={state.startDate}
          onChange={handleTextChange}
          className={classes.margin}
        />
        <TextField
          id="end-date"
          name="endDate"
          label="End Date" 
          type="date"
          value={state.endDate}
          onChange={handleTextChange}
          className={classes.margin}
        />
        <Button 
          variant="contained"
          color="secondary"
          onClick={() => handleClick()}
          className={classes.margin}
        >
          Export Submissions
        </Button>
    </Box>
  )
}