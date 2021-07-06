import React from "react";
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { account, questions as Qs, people as everyone} from "../../constants/tempDatabase" // TEMP

import { CONTENT } from "../../constants/enum"
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
  const {content, setContent, form, setForm } = props;

  React.useEffect(() => {
  }, []);

  // API call for account settings
  // API call for questions
  // API call for people
  
  // Hook for title
  const [title, setTitle] = React.useState(account.title)

  // Hook for isRandomized
  const [randomized, setRandomized] = React.useState(account.randomizeQuestions);

  // Hook for all questions
  const [questions, setQuestions] = React.useState(Qs);

  // Hook for all people
  const [people, setPeople] = React.useState(everyone)

  // Hook for the time (morning or afternoon)
  const [morning, setMorning] = React.useState(true)

  // Hook for the current person
  const [person, setPerson] = React.useState(null);

  // handleClick for the reset button
  function handleResetClick() {
    setPeople(everyone);
    setQuestions(Qs);
    console.log(questions);
    setContent(CONTENT.KEYPAD);
  }

  // Hook for rendering the main content based on program state
  function renderContent() {
    switch(content) {
      case CONTENT.HOME:
        return (
          <Home setContent={setContent} setForm={setForm} />
        );
      case CONTENT.MENU:
        return (
          <Menu 
            setContent={setContent} 
            title={title} 
            setTitle={setTitle}
            randomized={randomized}
            setRandomized={setRandomized}
          />
        );
      case CONTENT.MANUAL:
          return (
            <Manual handleResetClick={handleResetClick}/>
          );
      case CONTENT.KEYPAD:
        return (
          <Keypad 
            setContent={setContent} 
            handleResetClick={handleResetClick}
            form={form} 
            people={people} 
            setPeople={setPeople}
          />
        );
      case CONTENT.PEOPLE:
        return (
          <People 
            setContent={setContent} 
            handleResetClick={handleResetClick}
            people={people}
            form={form} 
            morning={morning} 
            randomized={randomized}
            setPerson={setPerson}
            questions={questions} setQuestions={setQuestions}
          />
        );
      case CONTENT.QUESTIONNAIRE:
          return (
            <Questionnaire 
              setContent={setContent}
              handleResetClick={handleResetClick}
              randomized={randomized}
              person={person} 
              questions={questions}
              morning={morning}
            />
          );
      case CONTENT.SUMMARY:
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
  
  return (
    <Container component="main" className={classes.main}>
      <Container 
        disableGutters
        className={classes.title} 
        onClick={() => setMorning(!morning)}
      >
        <Title content={content} title={title} morning={morning} />
      </Container>
      <Container className={classes.content}>
        {renderContent()} 
      </Container>
    </Container>
  )
}