import {createGlobalStyle} from "styled-components"
import backgroundImg from "./media/background.png"

// app theme
const theme = {
    background: backgroundImg,

    primary: "#A6A6A6",
    secondary: "#3C3C3C",

    black: "#000000",
    white: "#FFFFFF",

    pFont: "'Lora', serif",
    hFont: "'Ubuntu Condensed', sans-serif",
  };

// Global styling for html
const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: url(${theme.background}) no-repeat center center fixed;
    margin: 0;
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