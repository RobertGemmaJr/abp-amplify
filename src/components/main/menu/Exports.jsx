import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Box, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0, 1),
  }
}))

export default function Exports(props) {
  const classes = useStyles();
  const {state, setState} = props;

  // Handle change for text items
  const handleTextChange = (event) => {
    setState({...state, [event.target.name]: event.target.value })
  }

  // Handle export button clicked by date
  function handleExportDateClick() {
  
  }

  // Handle export button clicked by person
  function handleExportPersonClick() {

  }

  return(
    <Box display="flex" justifyContent="space-evenly" m={2}>
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
          onClick={() => handleExportDateClick()}
          className={classes.margin}
        >
          Export Answers
        </Button>
      </Box>

      <Box display="flex" justifyContent="center">
        <TextField
          id="export-name"
          name="export-name"
          label="Name"
          value={state.exportName}
          onChange={handleTextChange}
          variant="outlined"
          noValidate
          className={classes.margin}
        />
        <Button 
          variant="contained"
          color="secondary"
          onClick={() => handleExportPersonClick()}
          className={classes.margin}
        >
          Export Answers
        </Button>
      </Box>
    </Box>
  )
}