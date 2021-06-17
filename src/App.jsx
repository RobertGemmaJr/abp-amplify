import React from "react";
import { CssBaseline, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { CONTENT, FORM } from "./constants/enum";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

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
 * Put menu button on the <Home> page instead of the header? 
 * 
 */
function App(props) {
  const classes = useStyles();

  // Hook for content to be shown
  const [content, setContent] = React.useState(CONTENT.HOME);

  // Hook for the current form
  const [form, setForm] = React.useState(FORM.NONE);

  // Hook for the current person
  const [person, setPerson] = React.useState(null);

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
        content={content} setContent={setContent}
        form={form} setForm={setForm}
        person={person} setPerson={setPerson}
      />
      <Footer />
    </Box>
  );
}

export default App;