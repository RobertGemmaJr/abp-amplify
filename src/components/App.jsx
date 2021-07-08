import React from "react";

import { withAuthenticator } from '@aws-amplify/ui-react'
import { CssBaseline, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { CONTENT, FORM } from "../constants/enum";
import { getSettings, getPeople } from "../api";
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
    getSettings().then(res => {
      setSettings(res)
    }).catch(e => {console.error(e)})

    getPeople().then(res => {
      setPeople(res)
    }).catch(e => {console.error(e)}); 


    // getQuestions(); 
  }, [])

  // Hook for user settings
  const [settings, setSettings] = React.useState(0);

  // Hook for user's people
  const [people, setPeople] = React.useState(0);

  // Hook for user's questions

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
        people={people} setPeople={setPeople}
        content={content} setContent={setContent} 
        form={form} setForm={setForm}
      />
      <Footer />
    </Box>
  );
}

export default withAuthenticator(App);