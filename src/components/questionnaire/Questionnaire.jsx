import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ResetButton from "../ResetButton"

import { questions } from "../../constants/tempDatabase"; // TEMP - will get from database API

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  questionnaire: {
    flexGrow: 1,
  },
}))

// Questions should be displayed on at a time
// Questions given through Azure chatbot?
export default function Questionnaire(props) {
    const classes = useStyles(0);
    const { setContent, morning, person } = props;
    console.log(questions)

    return (
      <Paper className={classes.paper}>
        <Container className={classes.questionnaire}>

        </Container>
        <ResetButton setContent={props.setContent}/>
      </Paper>
    )
}