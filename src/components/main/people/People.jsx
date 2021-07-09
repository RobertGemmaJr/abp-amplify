import { GridList, GridListTile } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { Content, Ptype } from "../../../models";
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

// Get checkbox index for the current form
function getIndex(form, morning) {
  if      (form === Ptype.FAMILY && morning === true) return 0;
  else if (form === Ptype.FAMILY && morning === false) return 1;
  else if (form === Ptype.STAFF && morning === true) return 2;
  else if (form === Ptype.STAFF && morning === false) return 3;
  else if (form === Ptype.MANUAL && morning === true) return 4;
  else if (form === Ptype.MANUAL && morning === false) return 5;
  else console.error("Invalid form settings", form, morning)
}

export default function People(props) {
  const classes = useStyles();
  const { setContent, handleResetClick, people, form, morning, randomizeQuestions,
          setPerson, questions, setQuestions } = props;

  function generateQuestionnaire(person) {
    setPerson(person)

    const idx = getIndex(form, morning)

    // Filter questions by filter index
    console.log("Start", questions)
    setQuestions(questions.filter(q => q.checkboxes[idx]))
    if(randomizeQuestions) {
      // Note that this is a biased randomization algorithm
      setQuestions(questions.sort(() => Math.random() - 0.5));
    }

    // Render the questionnaire
    setContent(Content.QUESTIONNAIRE)
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