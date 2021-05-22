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
 * 
 * @TODO Miscellaneous
 * Header(text and buttons) and title should scale down on xs devices
 * Images on <Home> page are cropped.
 * Put menu button on the <Home> page instead of the header? 
 * 
 */
function App(props) {
  const classes = useStyles();

  // Hook for content to be shown
  const [content, setContent] = React.useState("home")
  const [menuPrev, setMenuPrev] = React.useState("home")

  // HandleClick functions
  function handleHomeClick() {
    setContent("home")
  }
  function handleResetClick() { 
    setContent("keypad")
  }
  function handleMenuClick() {
    if (content === "menu") {
      setContent(menuPrev)
    } else {
      setMenuPrev(content)
      setContent("menu")
    }
  }

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Header 
        homeClick={() => handleHomeClick()}
        menuClick={() => handleMenuClick()}
        resetClick={() => handleResetClick()}
        content={content}
      />
      <Main 
        content={content}
        setContent={setContent}
      />
      <Footer />
    </Box>
  );
}

export default withAuthenticator(App);