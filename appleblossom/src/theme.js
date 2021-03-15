import { createGlobalStyle } from "styled-components"

// app theme
const theme = {
    background: "#FFFFFF",
    primary: "#000000",
    // secondary: "#CEBC81",
    // tertiary: "#A16E83",
    // quaternary: "#B19F9E",
    pFont: "'Lora', serif",
    hFont: "'Ubuntu Condensed', sans-serif",
  };

// Global styling
  // Styling of html elements
  const GlobalStyle = createGlobalStyle`
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
      padding: 0;
      background-color: ${theme.background};
    }
  
    h1, h2, h3, h4, h5, h6 {
      font-family: ${theme.hFont};
      color: ${theme.primary};
    }
  
    p {
      font-family: ${theme.pFont};
      color: ${theme.primary};
    }
  
    code {
        font-family: source-code-pro, Menlo, monospace;
    }
  `

export { theme, GlobalStyle }