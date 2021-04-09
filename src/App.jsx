import React from "react";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from "./theme"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

/**
 * @TODO meta info in index.html
 * @TODO favicon.io and logo images
 * @TODO Theme colors and fonts (black and white)
 * 
 * @TODO buttons should take style (type) and text as props
 * @TODO header with logo, name, reset button, menu, etc.
 * 
 * @TODO morning/afternoon questions automatically decided by time?
 * @returns Outermost structure of the React app. Applies theming
 */
function App(props) {
  const [showMenu, setShowMenu] = React.useState(true)

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Header menuClick={() => setShowMenu(!showMenu)}/>
        <Body showMenu={showMenu}/>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;