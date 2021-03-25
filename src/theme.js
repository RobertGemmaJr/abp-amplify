import { createGlobalStyle } from "styled-components"

// app theme
const theme = {
    background: "#CEBC81",
    primary: "#A6A6A6",
    secondary: "#3C3C3C",

    black: "#000000",
    white: "#FFFFFF",

    pFont: "'Lora', serif",
    hFont: "'Ubuntu Condensed', sans-serif",
  };

// Global styling
  const GlobalStyle = createGlobalStyle`

    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${theme.background};
      margin: 0 !important;
      padding: 0 !important;
    }
  
    h1, h2, h3, h4, h5, h6 {
      font-family: ${theme.hFont};
      color: ${theme.black};
    }
  
    p {
      font-family: ${theme.pFont};
      color: ${theme.black};
    }
  
    code {
        font-family: source-code-pro, Menlo, monospace;
    }
  `

export { theme, GlobalStyle }