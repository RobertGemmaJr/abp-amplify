import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components"

import { theme, GlobalStyle } from "./theme"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

const Wrapper = styled.div`
  height: 100vh;
`;

/**
 * @TODO meta info in index.html
 * @TODO favicon.io and logo images
 * @TODO Theme colors and fonts (black and white)
 * 
 * @TODO buttons should take style (type) and text as props
 * @TODO header with logo, name, reset button, menu, etc.
 * 
 * @TODO morning/afternoon questions automatically decided by time?
 * @returns Outermost structure of the React app. Applies theming.
 */
function App(props) {
  // Hook for showing the menu
  const [showMenu, setShowMenu] = React.useState(true)

  // Function for reset button
  function reset() {
    console.log("Reset")
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Header 
          menuClick={() => setShowMenu(!showMenu)}
          resetClick={() => reset()}
        />
        <Body showMenu={showMenu}/>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;