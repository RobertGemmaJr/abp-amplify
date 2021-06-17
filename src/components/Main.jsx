import { useState } from "react"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { CONTENT } from "../constants/enum"
import Title from "./Title"
import Home from "./home/Home"
import Keypad from "./Keypad"
import Menu from "./menu/Menu"
import People from "./people/People";
import Questionnaire from "./questionnaire/Questionnaire"
import Manual from "./Manual"

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
  resetButton: {
    textAlign: "center",
    marginTop: theme.spacing(3),
  }
}))

export default function Main(props) {
  const classes = useStyles();
  const {content, setContent, form, setForm, person, setPerson} = props;
  
  // Hook for title
  // TEMP - this should be saved in a database not a hook
  const [title, setTitle] = useState("Company Title")

  // Hook for question type
  const [qType, setQType] = useState(true)

  // Hook for rendering the main content based on program state
  function renderContent() {
    switch(content) {
      case CONTENT.HOME:
        return <Home setContent={setContent} setForm={setForm} />;
      case CONTENT.MENU:
        return <Menu setContent={setContent} title={title} setTitle={setTitle} />;
      case CONTENT.MANUAL:
          return <Manual setContent={setContent}/>;
      case CONTENT.KEYPAD:
        return <Keypad setContent={setContent}/>;
      case CONTENT.PEOPLE:
        return <People setContent={setContent} form={form} setPerson={setPerson}/>;
      case CONTENT.QUESTIONNAIRE:
          return <Questionnaire setContent={setContent} person={person} />;
      case CONTENT.SUMMARY:
          // This will be the summary page with questions and responses
          // return <Summary setContent={setContent} person={person}/>;
          break;
      default:
        console.error("Invalid content code", content)
        break;
    }
  }
  
  return (
    <Container component="main" className={classes.main}>
      <Container 
        disableGutters
        className={classes.title} 
        onClick={() => setQType(!qType)}
      >
        <Title content={content} title={title} qType={qType} />
      </Container>
      <Container className={classes.content}>
        {renderContent()} 
      </Container>
    </Container>
  )
}