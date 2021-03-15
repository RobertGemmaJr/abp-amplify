import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from "./theme"
import Footer from "./components/Footer"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello, World.</h1>
      <Footer />
    </ThemeProvider>
  );
}
