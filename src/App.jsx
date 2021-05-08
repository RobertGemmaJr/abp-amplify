import React from "react";
import { CssBaseline, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import backgroundImg from "./media/background.png"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const useStyles = makeStyles(theme => ({
  root : {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    // backgroundImage: `url(${backgroundImg})`,
  },
}))

function App(props) {
  const classes = useStyles();

  // Hook for content to be shown
  const [content, setContent] = React.useState("keypad") // Start as home


  function handleResetClick() { 
    setContent("keypad")
  }

  function handleMenuClick() {
    setContent("menu")
  }

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Header 
        menuClick={() => handleMenuClick()}
        resetClick={() => handleResetClick()}
      />
      <Main 
        content={content}
        setContent={setContent}
      />
      <Footer />
    </Box>
  );
}

export default App;
