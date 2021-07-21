import React from "react";
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { makeStyles } from "@material-ui/styles";
import { Paper, Typography, TextField, Box, Button, Grid, Checkbox, FormGroup, FormControlLabel, Switch } from "@material-ui/core";

import { Content } from "../../../models";
import PeopleGrid from "./PeopleGrid";
import QuestionsGrid from "./QuestionsGrid";
import Imports from "./Imports";
import ExportByDate from "./ExportByDate";
import NewTitle from "./NewTitle";
import ExportByName from "./ExportByName";

const useStyles = makeStyles(theme => ({
  box: {
    margin: theme.spacing(3),
  },
  menu: {
    width: "100%",
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
  // const {setContent, settings, setSettings, people, setPeople, questions, setQuestions} = props;
  const {setContent, settings, people, questions, } = props;
    // people is allPeople and questions is allQuestions - not the hook

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
      <Imports className={classes.box} state={state} setState={setState}/>

      {/* Update Title */}
      <NewTitle className={classes.box} state={state} setState={setState}/>

      {/* Export buttons */}
      <ExportByDate className={classes.box} state={state} setState={setState}/>
      <ExportByName className={classes.box} state={state} setState={setState}/>


      {/* Temperature */}
      <Typography align="center" variant="h4">Temperature</Typography>
      <Box className={classes.box} display="flex" justifyContent="space-evenly">
        {/* Record Temperature? */}
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox 
                color="secondary" 
                name="newRecordTemperature"
                checked={state.newRecordTemperature}
                onChange={handleCheckboxChange} 
              />
            }
            label="Record Temperature?"
            labelPlacement="start"
          />
        </FormGroup>

        {/* Keep Temperature? */}
        <Grid component="label" container alignItems="center" spacing={1} xs={3}>
          <Grid item xs>Checkbox</Grid>
          <Grid item xs>
            {/* <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" /> */}
            <Switch
              name="newKeepTemperature"
              checked={state.newKeepTemperature}
              onChange={handleCheckboxChange}
            />
          </Grid>
          <Grid item xs>Temperature</Grid>
        </Grid>

        {/* Temperature Tolerance */}
        <TextField 
          id="new-temp-tolerance" 
          name="newTempTolerance"
          label="Temperature Tolerance" 
          value={state.newTempTolerance}
          onChange={handleTextChange}
          variant="outlined"
          helperText={"Enter the tolerance +/- 98.6: a tolerance of 2 will pass temperatures from 96.6-100.6"}
          disabled={!state.newKeepTemperature}
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