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
  resetButton: {
    textAlign: "center",
    marginTop: theme.spacing(3),
  }
}))

export default function Main(props) {
  const classes = useStyles();
  const {content, setContent} = props;
  
  // Hook for title
  // TEMP - this should be saved in a database not a hook
  const [title, setTitle] = useState("Company Title")

  // Hook for question type
  const [qType, setQType] = useState(true)

  // Hook for rendering the main content based on program state
  
  function renderContent() {
    switch(content) {
      case "menu":
        return (
        <Menu 
          content={content} 
          setContent={setContent}
          title={title} 
          setTitle={setTitle}
        />
        );
      case "home":
        return <Home content={content} setContent={setContent}/>;
      case "keypad":
        return <Keypad content={content} setContent={setContent}/>;
      case "people":
        return <People content={content} setContent={setContent}/>;
      case "questionnaire":
          return <Questionnaire content={content} setContent={setContent}/>;
      case "summary":
          // This will be the summary page with questions and responses
          // return <Summary setContent={setContent}/>;
          break;
      default:
        console.error("Invalid content code")
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
      
      {/* <Container className={classes.resetButton}> 
        <Button 
          variant="contained" 
          className={classes.hButton}
          onClick={resetClick}
          color="secondary"
          disabled={props.content === "home" || props.content === "menu" ? true: false}
        >
          Reset
        </Button>
      </Container> */}
    </Container>
  )
}