import { Box, Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ResetButton from "../ResetButton"
import Question from "./Question";

import { questions } from "../../constants/tempDatabase"; // TEMP - will get from database API

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    '& > *': {
      fontWeight: "bold",
    },
  }
}))

// Returns date as a "mm/dd/yyyy" format
function getDate() {
  const today = new Date()
  return (
    String(today.getMonth()+1).padStart(2, "0") + "/" + 
    String(today.getDate()).padStart(2, "0") +  "/" +
    today.getFullYear()
  );
}

export default function Questionnaire(props) {
    const classes = useStyles();
    const { setContent, form, morning, person } = props;

    // Get checkbox index for the current form and filter questions
    // family-morning == 0, family-afternoon == 1, staff-morning == 2, ... 
    const idx = 2 * (form-1) + !morning
    const formQuestions = questions.filter(question => question.checkboxes[idx])

    return (
      <Paper className={classes.paper}>
        <Box color="primary" className={classes.header}>
          <Typography variant="h5" component="h5">
            {getDate()}
          </Typography>
          <Typography variant="h5" component="h5"> 
            {person.fName + " " + person.lName}
          </Typography>
        </Box>
        <Question key={formQuestions[0].id} q={formQuestions[0]} className={classes.question}/>
        <ResetButton setContent={setContent}/>
      </Paper>
    )
}