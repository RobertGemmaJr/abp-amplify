import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from "./theme"
import Footer from "./components/Footer"
import Search from "./components/Search"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello, World</h1>
      <Search />
      <Footer />
    </ThemeProvider>
  );
}