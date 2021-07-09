import React from "react";
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { Paper, TextField, Box, Button, Checkbox, FormGroup, FormControlLabel, Typography } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from "@material-ui/styles";

import { questions } from "../../../constants/tempDatabase" // TEMP

import { Content } from "../../../models";
import MenuQCard from "./MenuQCard";
import AddQButton from "./AddQButton";

// Returns date as a "yyyy-mm-dd" format
function getDate() {
  const today = new Date()
  return (
    today.getFullYear() + "-" + 
    String(today.getMonth()+1).padStart(2, "0") + "-" + 
    String(today.getDate()).padStart(2, "0")
  );
}

const useStyles = makeStyles(theme => ({
  box: {
    margin: theme.spacing(3),
  },
  menu: {
    width: "100%",
  },
  hideInput: {
    display: "none"
  },
  save: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  }
}))

// API.getQuestions
const tempQuestions = [];
questions.forEach(q => {
    tempQuestions.push(<MenuQCard key={q.id} q={q}/>);
})

export default function Menu(props) {
  const classes = useStyles();
  const {setContent, title, setTitle, randomized, setRandomized} = props;

  // API call for title abd randomized
  // Hook for menu state
  const [state, setState] = React.useState({
    newTitle: title,
    startDate: "2020-01-01",
    endDate: getDate(),
    randomized: randomized,
  })

  // Handle newTitle change
  const handleNewTitleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value })
  }

  // Handle randomized change
  const handleRandomizedChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked})
  }

  // Handle import family button clicked
  function handleImportFamilyClick() {

  }
  // Handle import staff button clicked
  function handleImportStaffClick() {

  }
  // Handle export button clicked
  function handleExportClick() {
    
  }

  // Handle save button clicked
  function handleSaveClick(state) {
    // API call to set title
    // API call to add/remove questions
    // API call to add/remove people
    setTitle(state.newTitle);
    setRandomized(state.randomized)
    setContent(Content.HOME)
    // window.location.reload();
  }

  return (
    <Paper className={classes.menu}>
    
      {/* Import Buttons */}
      <Box className={classes.box} display="flex" justifyContent="space-evenly">
        {/* Import Family List */}
        <input
          className={classes.hideInput}
          id="import-family-list"
          single="true"
          type="file"
          accept=".csv, .xlsx, .xls"
        />
        <label htmlFor="import-family-list">
          <Button 
            startIcon={<CloudUploadIcon />}
            variant="contained"
            color="secondary"
            component="span"
            onClick={() => handleImportFamilyClick()}
          >
            Import Family List
          </Button>
        </label>

        {/* Import Staff List */}
        <input
          className={classes.hideInput}
          id="import-staff-list"
          single="true"
          type="file"
          accept=".csv, .xlsx, .xls"
        />
        <label htmlFor="import-staff-list">
          <Button 
            startIcon={<CloudUploadIcon />}
            variant="contained"
            color="secondary"
            component="span"
            onClick={() => handleImportStaffClick()}
          >
            Import Staff List
          </Button>
        </label>
      </Box>

      {/* Export Answers */}
      <Box className={classes.box} display="flex" justifyContent="space-evenly">
        <TextField
          id="start-date"
          name="startDate"
          label="Start Date" 
          type="date"
          value={state.startDate}
          onChange={handleNewTitleChange}
        />
        <TextField
          id="end-date"
          name="endDate"
          label="End Date" 
          type="date"
          value={state.endDate}
          onChange={handleNewTitleChange}
        />
        <Button 
          variant="contained"
          color="secondary"
          onClick={() => handleExportClick()}
        >
          Export Answers
        </Button>
      </Box>

      {/* Update Title */}
      <Box className={classes.box} display="flex" justifyContent="space-evenly" component="form">
        <TextField 
          id="new-title" 
          name="newTitle"
          label="App Title" 
          value={state.newTitle}
          onChange={handleNewTitleChange}
          variant="outlined"
          noValidate fullWidth
        />
      </Box>

      {/* Edit Questions */}
      <Typography align="center" variant="h4">
        Questions
      </Typography>

      {/* Randomize Questions */}
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox 
              color="secondary" 
              name="randomized"
              checked={state.randomized}
              onChange={handleRandomizedChange} 
            />
          }
          label="Randomize Questions?"
          labelPlacement="start"
        />
      </FormGroup>

      {/* Display Questions */}
      {
      /* key is the questions index. State is its values */}
      {tempQuestions}
      
      {/* Question buttons */}
      <Box className={classes.box} display="flex" justifyContent="space-evenly">
        <AddQButton/>
      </Box>

      {/* Save Button */}
      <Box align="center" className={classes.save}>
        <Button 
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => handleSaveClick(state)}
        >
          Save
        </Button>
      </Box> 
      <AmplifySignOut />
    </Paper>
  )
}