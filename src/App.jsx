import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components"

import { theme, GlobalStyle } from "./theme"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

/**
 * @TODO meta info in index.html
 * @TODO favicon.io and logo images
 * @TODO Theme colors and fonts (black and white)

 * @TODO Menu stuff: temperature (number, checkbox, no). Add/delete/edit questions
 *   
 * @TODO Add logo to header
 * 
 * @TODO morning/afternoon questions automatically decided by time?
 * @returns Outermost structure of the React app. Applies theming.
 */
function App(props) {
  // Hook for showing the menu
  const [showMenu, setShowMenu] = React.useState(false)

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
        <Main showMenu={showMenu}/>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;