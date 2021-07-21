import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Box, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0, 1),
  }
}))

export default function ExportByName(props) {
  const classes = useStyles();
  const {state, setState} = props;

  // Handle change for text items
  const handleTextChange = (event) => {
    setState({...state, [event.target.name]: event.target.value })
  }

  // Handle click for the export button
  function handleClick() {

  }

  return(
    <Box display="flex" justifyContent="center" m={2}>
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
        onClick={() => handleClick()}
        className={classes.margin}
      >
        Export Submissions
      </Button>
    </Box>
  )
}