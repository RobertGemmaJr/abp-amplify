import { useState } from "react"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import Title from "./Title"
import Keypad from "./Keypad"

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  content: {

  },
}))

export default function Main(props) {
  const classes = useStyles();

  // Hook for subtitle text
  const [qType, setQType] = useState(true)
  const qText = qType ? "Morning Questions" : "Afternoon Questions"

  // Hook for displayed content

  return (
    <Container component="main" className={classes.main}>
      <Container 
        className={classes.title} 
        onClick={() => setQType(!qType)}
      >
        <Title subtitle={props.showMenu ? "Menu" : qText } />
      </Container>
      <Container className={classes.content}>
        <Keypad />
      </Container>
    </Container>
  )
}