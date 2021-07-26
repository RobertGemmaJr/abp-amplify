import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Checkbox } from "@material-ui/core"; 

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
    if(settings.keepTemperature) {
      // TextField response
      return isNaN(parseFloat(temperature)) ? "Invalid" : temperature
    } else {
      // Checkbox response
      if(temperature === true) return "Checked"
      else if(temperature === false) return "Not Checked"
      else return "Invalid";
    }
  }
}


// Returns true if all of the user responses match the question's expectedResponse
function checkPassed(questions, responses, temperature, settings) {
  questions.forEach((q, idx) => {
    if(q.expectedResponse !== responses[idx]) {
      return false;
    }
  })

  if(settings.recordTemperature) {
    if(settings.keepTemperature) {
      // Check based on temperature offset
      // Math.abs(temperature - 98.6) < settings.tempTolerance ?
      // console.log("Passed", Math.abs(temperature - 98.6) < settings.tempTolerance)
      // :
      // console.log("Failed", Math.abs(temperature - 98.6) < settings.tempTolerance)
    } else {
      if(!temperature) return false;
    }
  }

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
    async function generateSubmission() {
      const temperatureRes = getTemperatureSubmission(settings, temperature);
      console.log("Response:", temperatureRes)

      if(temperatureRes !== "Invalid") {
        const questionIds = []
        questions.forEach(q => { questionIds.push(q.id) })
  
        const submission = {
          personID: person.id,
          createdAt: new Date().toISOString(),
          formType: form.ptype,
          time: form.time,
          questions: questionIds,
          responses: responses,
          passed: checkPassed(questions, responses, temperature, settings),
        }

        // settings.recordTemperature && submission.temperature = temperature

        console.log(submission)
      }

      // Create ths submission
      // ONLY DO THIS IF STATE.TEMPERATURE IS NOT NAN
      // createSubmission(submission).then(res => {
      //   setSubmission(res)
      // }).catch(e => {console.error(e)}); 
    }

    function submit(temperatureResponse) {
      generateSubmission().then(res => {
        // setI(0);
        // setContent(Content.SUMMARY)
      }).catch(e => {console.error(e)})
    }

    // Handle clicks that submits answer to a single question
    function handleClick(response) {
      setResponses(responses.concat(response))
      setI(i + 1);
    }

    // Ask all questions and then create submission
    return (
      <Paper handleResetClick={handleResetClick} person={person}>
        {/* {
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
              checked={checked} setChecked={setChecked}
              handleClick={submit}
            />
        } */}

        <TemperatureQuestion 
          settings={settings}
          temperature={temperature} 
          setTemperature={setTemperature}
          handleClick={submit}
        />
      </Paper>
    )
}