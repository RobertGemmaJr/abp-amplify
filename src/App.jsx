import React from "react";
import { Container, CssBaseline } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';

import backgroundImg from "./media/background.png"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const useStyles = makeStyles(theme => ({
  root : {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImg})`,
  },
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
