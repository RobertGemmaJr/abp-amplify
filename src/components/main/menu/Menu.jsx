import React from "react";
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { makeStyles } from "@material-ui/styles";
import { Paper, TextField, Box, Button } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { Content, Ptype } from "../../../models";
import PeopleGrid from "./PeopleGrid";
import QuestionsGrid from "./QuestionsGrid";

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
  dataGrid: {
    margin: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  save: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  }
}))

// Returns date as a "yyyy-mm-dd" format
function getDate() {
  const today = new Date()
  return (
    today.getFullYear() + "-" + 
    String(today.getMonth()+1).padStart(2, "0") + "-" + 
    String(today.getDate()).padStart(2, "0")
  );
}


export default function Menu(props) {
  const classes = useStyles();
  // const {setContent, settings, setSettings, people, setPeople, questions, setQuestions} = props;
  const {setContent, settings, people, questions, } = props;
    // people is allPeople and questions is allQuestions - not the hook

  // Hook for menu state
  const [state, setState] = React.useState({
    newTitle: settings.title,
    startDate: "2020-01-01",
    endDate: getDate(),
    randomized: settings.randomizeQuestions,
  })

  // Handle newTitle change
  const handleNewTitleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value })
  }

  // Handle import family button clicked
  function handleImportPeopleClick(type) {
    console.log("clicked", type)

  }
  // Handle import questions button clicked
  function handleImportQuestionsClick() {

  }
  // Handle export button clicked
  function handleExportClick() {
    
  }

  // Handle save button clicked
  function handleSaveClick() {
    // Note: May not have to set hook since I reload the website

    // Update settings in database and set hook
    // setSettings(updateSettings(state.newTitle, state.randomized))

    // Update people in database and set hook

    // Update questions in database and set hook


    // API call to add/remove questions
    // API call to add/remove people

    setContent(Content.HOME) // May not need this when I reload the website
    // window.location.reload(); // Call as a React useEffect on exit?
  }

  const temp = "file name here"

  return (
    <Paper className={classes.menu}>
    
      {/* IMPORT BUTTONS */}
      <Box className={classes.box} display="flex" justifyContent="space-evenly">
        {/* Import Family List */}
        <Button
          startIcon={<CloudUploadIcon />}
          variant="contained"
          color="secondary"
          component="label"
          onClick={() => handleImportPeopleClick(Ptype.FAMILY)}
        >
          Import Family List
          <input
            hidden
            id="import-family-list"
            single="true"
            type="file"
            accept=".csv, .xlsx, .xls"
          />
        </Button>

        {/* Import Staff List */}
        <Button
          startIcon={<CloudUploadIcon />}
          variant="contained"
          color="secondary"
          component="label"
          onClick={() => handleImportPeopleClick(Ptype.STAFF)}
        >
          Import Staff List
          <input
            id="import-staff-list"
            single="true"
            type="file"
            accept=".csv, .xlsx, .xls"
            hidden
          />
        </Button>

        {/* Import Questions */}
        <input
          className={classes.hideInput}
          id="import-questions"
          single="true"
          type="file"
          accept=".csv, .xlsx, .xls"
        />
        <label htmlFor="import-questions">
          <Button 
            startIcon={<CloudUploadIcon />}
            variant="contained"
            color="secondary"
            component="span"
            onClick={() => handleImportQuestionsClick()}
          >
            Import Questions
          </Button>
        </label>
      </Box>

      {/* Export Answers */}
      <Box className={classes.box} display="flex" justifyContent="center">
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
      <Box className={classes.box} component="form">
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

      {/* QUESTIONS */}
      <QuestionsGrid questions={questions} state={state} setState={setState} />

      {/* PEOPLE */}
      <PeopleGrid people={people}/>

      {/* Save Button */}
      <Box align="center" className={classes.save}>
        <Button 
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => handleSaveClick()}
        >
          Save
        </Button>
      </Box> 
      <AmplifySignOut />
    </Paper>
  )
}