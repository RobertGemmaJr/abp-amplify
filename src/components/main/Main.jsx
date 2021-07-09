import React from "react";
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { Content } from "../../models";
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
    content, setContent, form, setForm, morning, setMorning, person, setPerson, 
    handleResetClick 
  } = props;

  // Hook for title
    // Just use settings hook from props (menu)
  const [title, setTitle] = React.useState(settings.title)

  // Hook for isRandomized
    // Just use settings hook from props (menu)
  const [randomized, setRandomized] = React.useState(settings.randomizeQuestions);

  // Hook for rendering the main content based on program state
  function renderContent() {
    switch(content) {
      case Content.HOME:
        return (
          <Home setContent={setContent} setForm={setForm} />
        );
      case Content.MENU:
        return (
          <Menu 
            setContent={setContent} 
            setSettings={setSettings}
            title={title} 
            setTitle={setTitle}
            randomized={randomized}
            setRandomized={setRandomized}
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
            form={form} 
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
            morning={morning} 
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
              morning={morning}
            />
          );
      case Content.SUMMARY:
          return (
            <Summary 
              setContent={setContent} 
              handleResetClick={handleResetClick}
              person={person}
            />
          )
      default:
        console.error("Invalid content code:", content)
        break;
    }
  }
  
  function handleClick() {
    if(content === Content.KEYPAD || content === Content.MANUAL || content === Content.PEOPLE) {
      // Only change on certain content states
      setMorning(!morning)
    } 
  }
  
  return (
    <Container component="main" className={classes.main}>
      <Container 
        disableGutters
        className={classes.title} 
        onClick={() => handleClick()}
      >
        <Title content={content} title={settings.title} morning={morning} />
      </Container>
      <Container className={classes.content}>
        {renderContent()} 
      </Container>
    </Container>
  )
}