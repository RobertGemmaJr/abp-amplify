import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Content } from "../../../models";
import { createSubmission } from "../../../api";
import Paper from "../../Paper"
import Question from "./Question";
import TemperatureQuestion from "./TemperatureQuestion";

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


// Determines the value for submission.temperature. Returns null on an invalid temperature.
function getTemperatureSubmission(settings, temperature) {
  if(settings.recordTemperature) {
    // TextField or Checkbox response
    if(settings.keepTemperature) {
      return isNaN(parseFloat(temperature)) ? "Invalid" : temperature
    } else {
      if(temperature === true) return "Passed"
      else if(temperature === false) return "Failed"
      else return "Invalid";
    }
  }
}


// Returns true if all of the user responses match the question's expectedResponse
// and the temperature is healthy
function checkPassed(questions, responses, temperature, settings) {
  // Check questionnaire responses
  if(questions.length !== responses.length) return false;
  for(let i = 0; i < questions.length; i++) {
    if(questions[i].expectedResponse !== responses[i]) return false;
  }

  // If recording, check healthy temperature
  if(settings.recordTemperature) {
    if(settings.keepTemperature) {
      if(Math.abs(temperature - 98.6) > settings.tempTolerance) return false;
    } else { if(temperature === "Failed") return false; }
  }

  // All tests passed
  return true;
}


export default function Questionnaire(props) {
    const classes = useStyles();
    const { 
      setContent, handleResetClick, settings, person, questions, form, responses, 
      setResponses, setSubmission,
    } = props;

    // Hook for indexing the questions array
    const [i, setI] = React.useState(0);

    // Hook for the temperature
    const [temperature, setTemperature] = React.useState(false);

    // Generate the submission and move to Summary page
    async function submitQuestionnaire(temper) {
      const temperatureRes = getTemperatureSubmission(settings, temperature);
      if(temperatureRes !== "Invalid") {
        const questionIds = []
        questions.forEach(q => { questionIds.push(q.id) })
  
        const submission = {
          personID: person.id,
          formType: form.ptype,
          time: form.time,
          questions: questionIds,
          responses: responses,
          temperature: temperatureRes,
          passed: checkPassed(questions, responses, temperatureRes, settings),
        }

        const res = await createSubmission(submission)
        setSubmission(res)
        setI(0);
        setContent(Content.SUMMARY)
      } else {
        // Add some error to screen if submission fails - Temperature Response is invalid
      }
    }

    // Handle clicks that submits answer to a single question
    function handleClick(response) {
      setResponses(responses.concat(response))
      setI(i + 1);
    }

    // Ask all questions and then create submission
    return (
      <Paper handleResetClick={handleResetClick} person={person}>
        {
          i < questions.length ? 
            <Question 
              className={classes.question}
              key={questions[i].index}  
              q={questions[i]}
              handleClick={handleClick}
            />
          : 
            <TemperatureQuestion 
              settings={settings}
              temperature={temperature} 
              setTemperature={setTemperature}
              handleClick={submitQuestionnaire}
            />
        }       
      </Paper>
    )
}