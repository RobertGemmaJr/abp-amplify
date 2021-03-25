import React from "react";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from "./theme"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"


/* TODO:

  * meta info in index.html
  * favicon.io and logo images
  * Theme colors and fonts (black and white)
  * 
  * buttons should take style (type) and text as props
  * header with logo, name, reset button, menu, etc.
  * 
  * morning/afternoon questions automatically decided by time?

*/

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;