import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { FORM } from "../../constants/enum"
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

export default function Questionnaire(props) {
    const classes = useStyles();
    const { setContent, form, morning, person } = props;

    console.log(form, morning, person)

    // Filter questions for the current form
    const checkbox = null;
    if(form === FORM.FAMILY) {

    } else if (form === FORM.STAFF) {

    } else if (form === FORM.MANUAL) {

    } 
    else console.log("Incorrect form question. Form: ", form, ", morning: ", morning)

    const formQuestions = questions.filter(question => 
      (form === FORM.FAMILY && morning && question.checkboxes[0]) // family-morning
      // family-afternoon
      // staff-morning
      // staff-afternoon
      // manual-morning
      // manual-afternoon
    )
    console.log(formQuestions)

    return (
      <Paper className={classes.paper}>
        <Container className={classes.questionnaire}>
          Questionnaire
        </Container>
        <ResetButton setContent={setContent}/>
      </Paper>
    )
}