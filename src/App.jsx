import React from "react";
import { Container, CssBaseline } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';

import backgroundImg from "./media/background.png"

const useStyles = makeStyles(theme => ({
  root : {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImg})`,
  },
  header: {
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Header */}
      <header className={classes.header}>
        <Container>
          <Typography variant="body1">This is the header</Typography>
        </Container>
      </header>

      {/* Main */}
      <Container component="main" className={classes.main}>
        <Typography variant="body1">This is the main</Typography>
      </Container>

      {/* Footer */}
      <footer className={classes.footer}>
      <Container>
        <Typography variant="body1">This is the footer</Typography>
      </Container>
    </footer>
    </div>
  );
}

export default App;
