import React from "react";
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { makeStyles } from "@material-ui/styles";
import { Paper, Box, Button } from "@material-ui/core";

import { Content } from "../../../models";
import PeopleGrid from "./PeopleGrid";
import QuestionsGrid from "./QuestionsGrid";
import Imports from "./Imports";
import ExportByDate from "./ExportByDate";
import NewTitle from "./NewTitle";
import ExportByName from "./ExportByName";
import Temperature from "./Temperature";

const useStyles = makeStyles(theme => ({
  menu: {
    width: "100%",
    padding: theme.spacing(2),

    "& >*": {
      margin: theme.spacing(5, 0),
    }
  },
  save: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  },
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
  const {setContent, settings, setSettings, people, setPeople, questions, setQuestions} = props;
    // people is allPeople and questions is allQuestions - not the hook
    // This is a problem when we make new people

  // Hook for menu state
  const [state, setState] = React.useState({
    // User settings
    newTitle: settings.title,
    newRandomizeQuestions: settings.randomizeQuestions,
    newRecordTemperature: settings.recordTemperature,
    newKeepTemperature: settings.keepTemperature,
    newTempTolerance: settings.tempTolerance,

    // Export questions
    startDate: "2020-01-01",
    endDate: getDate(),
    exportName: "",

    // Import data
    newPeople: null,
    newStaff: null,
    newQuestions: null,
  })

  // Handle change for text items
  const handleTextChange = (event) => {
    setState({...state, [event.target.name]: event.target.value })
  }

  // Handle change for checkbox items
  const handleCheckboxChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked})
  }

  // Handle save button clicked
  function handleSaveClick() {
    // Note: May not have to set hook since I reload the website

    // Update settings in database and set hook
    // setSettings(updateSettings(state.newTitle, state.newRandomizeQuestions))

    // Update people in database and set hook

    // Update questions in database and set hook


    // API call to add/remove questions
    // API call to add/remove people

    setContent(Content.HOME) // May not need this when I reload the website
    // window.location.reload(); // Call as a React useEffect on exit?
  }

  // console.log(state)
  return (
    <Paper className={classes.menu}>
    
      {/* IMPORT BUTTONS */}
      {/* Move each button to the correct section */}
      <Imports state={state} setState={setState}/>

      {/* Update Title */}
      <NewTitle state={state} setState={setState} handleChange={handleTextChange}/>

      {/* Temperature Settings */} 
      <Temperature 
        state={state} setState={setState} 
        handleCheckboxChange={handleCheckboxChange} handleTextChange={handleTextChange}
      />

      {/* Export buttons */}
      <ExportByDate state={state} setState={setState}/>
      <ExportByName state={state} setState={setState}/>

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