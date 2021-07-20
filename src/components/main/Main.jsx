import React from "react";
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { Content, Time } from "../../models";
import Title from "./Title"
import Home from "./home/Home"
import Keypad from "./keypad/Keypad"
import Menu from "./menu/Menu"
import People from "./people/People";
import Questionnaire from "./questionnaire/Questionnaire"
import Manual from "./manual/Manual"
import Summary from "./summary/Summary"

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
  resetButton: {
    textAlign: "center",
    marginTop: theme.spacing(3),
  }
}))

export default function Main(props) {
  const classes = useStyles();
  const {
    settings, setSettings, people, setPeople, questions, setQuestions, 
    content, setContent, form, setForm, person, setPerson, responses, 
    setResponses, submission, setSubmission, handleResetClick,
    allQuestions, allPeople
  } = props;

  // Hook for rendering the main content based on program state
  function renderContent() {
    switch(content) {
      case Content.HOME:
        return (
          <Home 
            setContent={setContent} 
            form={form} setForm={setForm}
          />
        );
      case Content.MENU:
        return (
          <Menu 
            setContent={setContent} 
            settings={settings}
            setSettings={setSettings}
            people={allPeople}
            questions={allQuestions}
          />
        );
      case Content.MANUAL:
        return (
          <Manual setContent={setContent} setPerson={setPerson}/>
        );
      case Content.KEYPAD:
        return (
          <Keypad 
            setContent={setContent} 
            handleResetClick={handleResetClick}
            ptype={form.ptype} 
            people={people} 
            setPeople={setPeople}
          />
        );
      case Content.PEOPLE:
        return (
          <People 
            setContent={setContent} 
            handleResetClick={handleResetClick}
            people={people}
            form={form} 
            randomizeQuestions={settings.randomizeQuestions}
            setPerson={setPerson}
            questions={questions} setQuestions={setQuestions}
          />
        );
      case Content.QUESTIONNAIRE:
          return (
            <Questionnaire 
              setContent={setContent}
              handleResetClick={handleResetClick}
              person={person} 
              questions={questions}
              form={form}
              responses={responses} setResponses={setResponses}
              setSubmission={setSubmission}
            />
          );
      case Content.SUMMARY:
          return (
            <Summary 
              handleResetClick={handleResetClick}
              person={person}
              setContent={setContent} 
              submission={submission}
            />
          )
      default:
        console.error("Invalid content code:", content)
        break;
    }
  }
  
  // Change time under certain states
  function handleTitleClick() {
    if(content === Content.HOME) {
      setForm({
        ...form, 
        "time": form.time = (form.time === Time.MORNING ? Time.AFTERNOON : Time.MORNING)
      })
    } 
  }
  
  return (
    <Container component="main" className={classes.main}>
      <Container 
        disableGutters
        className={classes.title} 
        onClick={() => handleTitleClick()}
      >
        <Title content={content} title={settings.title} time={form.time} />
      </Container>
      <Container className={classes.content}>
        {renderContent()} 
      </Container>
    </Container>
  )
}