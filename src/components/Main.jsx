import { useState } from "react"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import Title from "./Title"
import Keypad from "./Keypad"
import Menu from "./Menu"
import People from "./People";

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

// Renders the main content based on program state
function renderContent(props) {
  const {content, setContent} = props;
  switch(content) {
    case "menu":
      return <Menu />;
    case "home":
      // return <Home />;
      break;
    case "keypad":
      return <Keypad content={content} setContent={setContent}/>;
    case "people":
      return <People />;
    case "questionnaire":
        // return <Questionnaire />;
        break;
    case "summary":
        // return <Summary />;
        break;
    default:
      console.error("Invalid content code")
      break;
  }
}

export default function Main(props) {
  const classes = useStyles();

  // Hook for question type
  const [qType, setQType] = useState(true)
  
  return (
    <Container component="main" className={classes.main}>
      <Container 
        disableGutters
        className={classes.title} 
        onClick={() => setQType(!qType)}
      >
        <Title content={props.content} qType={qType} />
      </Container>
      <Container className={classes.content}>
        {renderContent(props)}
      </Container>
    </Container>
  )
}