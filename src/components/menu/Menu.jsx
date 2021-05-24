import React from "react"
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { Paper, TextField, Box, Button, Checkbox, FormGroup, FormControlLabel, Typography } from "@material-ui/core"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from "@material-ui/styles";

import MenuQCard from "./MenuQCard"
import AddQButton from "./AddQButton"

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
  menu: {
    width: "100%",
  },
  hideInput: {
    display: "none"
  },
  save: {
    marginTop: theme.spacing(5)
  }
}))

export default function Menu(props) {
  const classes = useStyles();

  // Hook for menu state
  // TODO: start newTitle from current title (API call)
  const [state, setState] = React.useState({
    newTitle: props.title,
    startDate: "2020-01-01",
    endDate: getDate(),
    randomized: true,
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
    props.setTitle(state.newTitle);
    props.setContent("home")
    // window.location.reload();
  }



  // TEMP - display example questions
  // Questions will be read from database
  const q1 = {
    id: 0,
    type: "temp",
    question: "97",
    response: "100",
    familyMorning: true,
    familyAfternoon: true,
    staffMorning: true,
    staffAfternoon: true,
    manualMorning: true,
    manualAfternoon: true,
  }
  const q2 = {
    id: 1,
    type: "text",
    question: "Text Question",
    response: "Answer",
    familyMorning: true,
    familyAfternoon: true,
    staffMorning: true,
    staffAfternoon: true,
    manualMorning: true,
    manualAfternoon: true,
  }
  const q3 = {
    id: 2,
    type: "bool",
    question: "Boolean Question",
    response: false,
    familyMorning: true,
    familyAfternoon: true,
    staffMorning: true,
    staffAfternoon: true,
    manualMorning: true,
    manualAfternoon: true,
  }
  const tempQuestions = [
    <MenuQCard key={q1.id} q={q1}/>,
    <MenuQCard key={q2.id} q={q2}/>,
    <MenuQCard key={q3.id} q={q3}/>,
  ]

  const boxMargin = 3
  return (
    <Paper className={classes.menu}>
    
      {/* Import Buttons */}
      <Box m={boxMargin} display="flex" justifyContent="space-evenly">
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
      <Box m={boxMargin} display="flex" justifyContent="space-evenly">
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
      <Box m={boxMargin} display="flex" justifyContent="space-evenly" component="form">
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
      {/* key is the questions index. State is its values */}
      {tempQuestions}
      
      {/* Question buttons */}
      <Box m={boxMargin} display="flex" justifyContent="space-evenly">
        <AddQButton/>
      </Box>

      {/* Save Button */}
      <Box m={boxMargin} align="center" className={classes.save}>
        <Button 
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => handleSaveClick(state)}
        >
          Save
        </Button>
      </Box> 
      
      {/* Let user sign out of amplify */}
      <AmplifySignOut />
    </Paper>
  )
}