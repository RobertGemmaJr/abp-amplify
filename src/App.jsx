import React from "react";

//import { theme, GlobalStyle } from "./theme" // REMOVE
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

/********** MATERIAL UI THEME **********/
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from "./uitheme"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexFlow: "column",
  },
}))

/**
 * @TODO meta info in index.html
 * @TODO favicon.io and logo images
 * @TODO Theme colors and fonts (black and white)
 *   
 * @TODO Add logo to header
 * 
 * @TODO morning/afternoon questions automatically decided by time?
 * @returns Outermost structure of the React app. Applies theming.
 */
function App(props) {
  const classes = useStyles();

  // Hook for showing the menu
  const [showMenu, setShowMenu] = React.useState(false)

  // Function for reset button
  function reset() { console.log("Reset") }

  return (
    <ThemeProvider theme={theme} className={classes.root}>
        <Header 
          menuClick={() => setShowMenu(!showMenu)}
          resetClick={() => reset()}
        />
        <Main showMenu={showMenu}/>
        <Footer />
    </ThemeProvider>
  );
}

export default App;