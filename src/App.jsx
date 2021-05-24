import React from "react";
import { CssBaseline, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import { withAuthenticator } from '@aws-amplify/ui-react'

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
 * @Amplify
 * This application uses AWS Amplify with GitHub for hosting. Changes made to 
 * the git branch will automatically be reflected on the live website. It uses 
 * a GraphQl database for the backend and React.js on the front end.
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
  const [content, setContent] = React.useState("home")

  // Hook for the current form type
  const [form, setForm] = React.useState("Test")

  // HandleClick functions
  function handleHomeClick() {
    setContent("home")
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
        content={content} 
        setContent={setContent}
        setForm={setForm}
      />
      <Footer />
    </Box>
  );
}

export default withAuthenticator(App);