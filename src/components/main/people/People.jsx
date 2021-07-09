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
function getIndex(form) {
  if      (form.ptype === Ptype.FAMILY && form.time === true) return 0;
  else if (form.ptype === Ptype.FAMILY && form.time === false) return 1;
  else if (form.ptype === Ptype.STAFF && form.time === true) return 2;
  else if (form.ptype === Ptype.STAFF && form.time === false) return 3;
  else if (form.ptype === Ptype.MANUAL && form.time === true) return 4;
  else if (form.ptype === Ptype.MANUAL && form.time === false) return 5;
  else console.error("Invalid form settings", form.ptype, form.time)
}

export default function People(props) {
  const classes = useStyles();
  const { setContent, handleResetClick, people, form, randomizeQuestions,
          setPerson, questions, setQuestions } = props;

  function generateQuestionnaire(person) {
    setPerson(person)

    const idx = getIndex(form)

    // Filter questions by filter index
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