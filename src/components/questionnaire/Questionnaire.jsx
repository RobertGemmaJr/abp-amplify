import React from "react";
import { Box, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { CONTENT } from "../../constants/enum";
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
  },
  text: {
    margin: theme.spacing(3),
    fontSize: 30,
    fontWeight: "bold",
    alignContent: "center",
  },
  answer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",

    '& > *': {
      margin: theme.spacing(2, 5),
    },
  },
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

    // Hook for indexing the formQuestions array
    const [i, setI] = React.useState(0);
    var q = formQuestions[i]

    // Handle "yes" button
    function handleYesClick() {
      setI(i + 1);
    }

    // Handle "no" button
    function handleNoClick() {
      setI(i + 1);
    }

    function submitResponses() {
      setContent(CONTENT.SUMMARY)
    }

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

        {/* Ask all questions and then submit the responses */}
        {i < formQuestions.length ? 
          <Box alignContent="center" justifyContent="center" className={classes.question}>
            <Typography align="center" className={classes.text}>
              {q.id + ") " + q.question}
            </Typography> 
            <Box className={classes.answer}>  
              <Button
                variant="contained" 
                color="primary"
                size="large"
                onClick={() => handleYesClick()}
              >
                Yes
              </Button>
              <Button
                variant="contained"
                color="primary" 
                size="large"
                onClick={() => handleNoClick()}
              >
                No
              </Button>
            </Box>
          </Box>
          :
          submitResponses()
        }

        <ResetButton setContent={setContent}/>
      </Paper>
    )
}