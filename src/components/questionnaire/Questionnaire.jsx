import { Button, Box, Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ResetButton from "../ResetButton"

import { questions } from "../../constants/tempDatabase"; // TEMP - will get from database API

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  questionnaire: {
    flexGrow: 1,
  },
  answer: {
    width: "100%",
    display: "flex",
    alignItems: "space-evenly",
  },
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    // flexGrow: 1,
  }
}))

export default function Questionnaire(props) {
    const classes = useStyles();
    const { setContent, form, morning, person } = props;

    // Get checkbox index for the current form and filter questions
    // family-morning == 0, family-afternoon == 1, staff-morning == 2, ... 
    const idx = 2 * (form-1) + !morning
    const formQuestions = questions.filter(question => question.checkboxes[idx])

    function handleYesClick() {

    }
    function handleNoClick() {

    }

    return (
      <Paper className={classes.paper}>
        <Container className={classes.questionnaire}>
          {person.fName + " " + person.lName}
          {formQuestions.map(q => {
            return <Typography key={q.id}>{q.question}</Typography>
          })}
        </Container>
        <Box className={classes.answer}>
          <Button
            variant="contained" 
            className={classes.hButton}
            onClick={() => handleYesClick()}
            color="primary"
            size="large"
          >
            Yes
          </Button>
          <Button
            variant="contained" 
            className={classes.hButton}
            onClick={() => handleNoClick()}
            color="primary"
            size="large"
          >
            No
          </Button>
        </Box>
        <Box className={classes.footer}>
          <Typography display="inline">Date</Typography>
          <ResetButton setContent={setContent}/>
          <Typography  display="inline">{person.fName + " " + person.lName}</Typography>
        </Box>
        
      </Paper>
    )
}