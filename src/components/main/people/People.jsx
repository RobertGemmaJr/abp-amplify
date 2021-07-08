import { GridList, GridListTile } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { CONTENT } from "../../../constants/enum";
import FlexBox from "../../FlexBox";
import Person from "./Person"

const useStyles = makeStyles(theme => ({
  gridList: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
}))

export default function People(props) {
  const classes = useStyles();
  const { setContent, handleResetClick, people, form, morning, randomizeQuestions,
          setPerson, questions, setQuestions } = props;

  function generateQuestionnaire(person) {
    setPerson(person)

    // Get checkbox index for the current form and morning/afternoon
    // family-morning == 0, family-afternoon == 1, staff-morning == 2, ... 
    const idx = 2 * (form-1) + !morning

    // Filter questions by filter index
    setQuestions(questions.filter(q => q.checkboxes[idx]))
    if(randomizeQuestions) {
      // Note that this is a biased randomization algorithm
      setQuestions(questions.sort(() => Math.random() - 0.5));
    }

    // Render the questionnaire
    setContent(CONTENT.QUESTIONNAIRE)
  }

  return (
    <FlexBox handleResetClick={handleResetClick} reset={true}>
      <GridList 
        cellHeight="auto"
        cols={4} 
        spacing={20} 
        className={classes.gridList}
      >
        {people.map(person => {
          return (
            <GridListTile key={person.id}>
              <Person 
                person={person} 
                name={person.fName + " " + person.lName}
                handleClick={generateQuestionnaire}
              />
            </GridListTile>
          )
        })}
      </GridList>
    </FlexBox>
  )
}