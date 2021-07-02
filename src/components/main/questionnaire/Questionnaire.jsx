import React from "react";
import { makeStyles } from "@material-ui/styles";

import { CONTENT } from "../../../constants/enum";
import Paper from "../../Paper"
import Question from "./Question";

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

// Returns true if all of the user responses match the question's expectedResponse
function checkPassed(questions, responses) {
  return true //TEMP
}

// Submits a response to the database
function submitResponses(questions, responses, morning, setResponse, setContent) {
  // Generate response
  const response = {
    id: Math.floor(Math.random() * 1000),
    date: getDate(),
    questions: questions,
    morning: morning,
    passed: checkPassed(questions, responses)
  }
  console.log(response.morning);

  // Write the response to the database
  setResponse(response)

  setContent(CONTENT.SUMMARY);
  responses.length = 0; //Clear responses array
}

// Keep track of the user's responses in an array
const responses = [];

export default function Questionnaire(props) {
    const classes = useStyles();
    const { setContent, person, questions, morning, setResponse } = props;

    // Hook for indexing the questions array
    const [i, setI] = React.useState(0);

    // Handle clicks that submit an answer
    function handleClick(response) {
      responses.push(response)
      setI(i + 1);
    }

    return (
      <Paper setContent={setContent} person={person}>
        {/* Ask all questions and then submit the responses */}
        {i < questions.length ? 
          <Question 
            className={classes.question}
            key={questions[i].id}  
            q={questions[i]}
            handleClick={handleClick}
          />
        : submitResponses(questions, responses, morning, setResponse, setContent)}
      </Paper>
    )
}