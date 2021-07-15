import React from "react";
import { Hub } from "@aws-amplify/core";
import { DataStore } from "@aws-amplify/datastore";
import { withAuthenticator } from '@aws-amplify/ui-react'
import { CssBaseline, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { Content, Ptype, Time } from "../models";
import { getSettings, getPeople, getQuestions } from "../api";
import Header from "./header/Header"
import Main from "./main/Main"
import Footer from "./footer/Footer"


const useStyles = makeStyles(theme => ({
  root : {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}))

const initialFormState = { time: Time.MORNING, ptype: Ptype.NONE }

// Prevents unnecessary API calls
var allPeople = null;
var allQuestions = null;

/**
 * 
 * @TODO Menu
 * Write a description of what the Home and Reset buttons do in <Menu>
 * Ability to view children and staff in <Menu> - this would use a material-ui <DataGrid>
 * Import buttons should display the file name after being selected
 * 
 * 
 * @TODO Miscellaneous
 * Header(text and buttons), title, subtitle, etc. should scale down on xs devices
 * Images on <Home> page are cropped.
 * 
 */
function App() {
  const classes = useStyles();

  // DataStore API calls on initial render
  // Listener ensures sync process completes before first query
  React.useEffect(() => {
    const listener = Hub.listen("datastore", async (capsule) => {
      const { payload: { event } } = capsule;
      // console.log("DataStore event", event);
 
      if (event === "ready") {
        getSettings().then(res => {
          setSettings(res)
        }).catch(e => {console.error(e)})
    
        getPeople().then(res => {
          allPeople = res;
          setPeople(res)
        }).catch(e => {console.error(e)}); 

        getQuestions().then(res => {
          allQuestions = res;
          setQuestions(res)
        }).catch(e => { console.error(e)}); 
      }
    });

    // Start the DataStore and call listener
    DataStore.start();
    return () => listener();
  }, [])

  // Hook for user's settings
  const [settings, setSettings] = React.useState(0);

  // Hook for user's people
  const [people, setPeople] = React.useState(0);

  // Hook for user's questions
  const [questions, setQuestions] = React.useState(0);

  // Hook for content to be shown
  const [content, setContent] = React.useState(Content.HOME);

  const [form, setForm] = React.useState(initialFormState)

  // Hook for the current person
  const [person, setPerson] = React.useState(null);

  // Hook for the current person's response
  const [responses, setResponses] = React.useState([]);

  // Hook for the current person's questionnaire submission
  const [submission, setSubmission] = React.useState(0);

  // HandleClick for the home button in the header
  function handleHomeClick() {
    setPeople(allPeople);
    setQuestions(allQuestions);
    setResponses([]);
    setSubmission(0);
    setForm(initialFormState);
    setContent(Content.HOME);
  }

  // HandleClick for the reset button
  function handleResetClick() {
    setPeople(allPeople);
    setQuestions(allQuestions);
    setResponses([]);
    setSubmission(0);
    form.ptype === Ptype.MANUAL ? setContent(Content.MANUAL) : setContent(Content.KEYPAD);
  }

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Header 
        content={content} 
        form={form} 
        homeClick={() => handleHomeClick()} 
      />
      <Main 
        settings={settings} setSettings={setSettings}
        people={people} setPeople={setPeople}
        questions={questions} setQuestions={setQuestions}
        content={content} setContent={setContent} 
        form={form} setForm={setForm}
        person={person} setPerson={setPerson}
        responses={responses} setResponses={setResponses} 
        submission={submission} setSubmission={setSubmission}
        handleResetClick={handleResetClick}
        allQuestions={allQuestions} allPeople={allPeople}
      />
      <Footer />
    </Box>
  );
}

export default withAuthenticator(App);