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

  // Hook for showing the menu
  const [showMenu, setShowMenu] = React.useState(false)

  // Function for reset button
  function reset() { console.log("Reset") }

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Header 
        menuClick={() => setShowMenu(!showMenu)}
        resetClick={() => reset()}
      />
      <Main showMenu={showMenu}/>
      <Footer />
    </Box>
  );
}

export default App;
