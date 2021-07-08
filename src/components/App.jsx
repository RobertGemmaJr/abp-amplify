import React from "react";
// import { API } from "aws-amplify";

import { withAuthenticator } from '@aws-amplify/ui-react'
import { CssBaseline, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

// import { listSettings } from "../graphql/queries"
// import * as mutations from "../graphql/mutations"
import { CONTENT, FORM } from "../constants/enum";
import Header from "./header/Header"
import Main from "./main/Main"
import Footer from "./footer/Footer"

// Test
import { DataStore } from '@aws-amplify/datastore';
import { Setting } from '../models';


const useStyles = makeStyles(theme => ({
  root : {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}))

async function getSettings(setSettings) {
  var models = await DataStore.query(Setting);

  if (!models.length) {
    // If no settings have been created, make initial one
    await DataStore.save(
      new Setting({
        "title": "Change Title in Menu",
        "randomizeQuestions": true
      })
    );
    models = await DataStore.query(Setting)    
  } else if (models.length > 1) console.error("Too many settings! Using first object")

  setSettings(models[0]);
}

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
  React.useEffect(() => {
    getSettings(setSettings);
    // getPeople(); 
    // getQuestions(); 
  }, [])

  // Hook for React settings
  const [settings, setSettings] = React.useState(0);

  // Hook for content to be shown
  const [content, setContent] = React.useState(CONTENT.HOME);

  // Hook for the current form
  const [form, setForm] = React.useState(FORM.NONE);

  // HandleClick for the home button in the header
  function handleHomeClick() {
    setForm(FORM.NONE)
    setContent(CONTENT.HOME)
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
        content={content} setContent={setContent} 
        form={form} setForm={setForm}
      />
      <Footer />
    </Box>
  );
}

export default withAuthenticator(App);