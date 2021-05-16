import { useState } from "react"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import Title from "./Title"
import Home from "./home/Home"
import Keypad from "./Keypad"
import Menu from "./menu/Menu"
import People from "./People";
import Questionnaire from "./Questionnaire"

const useStyles = makeStyles(theme => ({
  main: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  content: {
    padding: theme.spacing(0),
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
}))

export default function Main(props) {
  const classes = useStyles();

  // Render the main content based on program state
  const {content, setContent} = props;
  function renderContent() {
    switch(content) {
      case "menu":
        return <Menu />;
      case "home":
        return <Home setContent={setContent}/>;
      case "keypad":
        return <Keypad setContent={setContent}/>;
      case "people":
        return <People setContent={setContent}/>;
      case "questionnaire":
          return <Questionnaire />;
      case "summary":
          // return <Summary />;
          break;
      default:
        console.error("Invalid content code")
        break;
    }
  }

  // Hook for question type
  const [qType, setQType] = useState(true)
  
  return (
    <Container component="main" className={classes.main}>
      <Container 
        disableGutters
        className={classes.title} 
        onClick={() => setQType(!qType)}
      >
        <Title content={content} qType={qType} />
      </Container>
      <Container className={classes.content}> {renderContent()} </Container>
    </Container>
  )
}