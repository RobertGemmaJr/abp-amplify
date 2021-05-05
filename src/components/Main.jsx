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
  }
}))

export default function Main(props) {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.main}>
      <Title />
      <Keypad />
    </Container>
  )
}