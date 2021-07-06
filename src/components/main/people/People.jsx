import { GridList, GridListTile } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { CONTENT } from "../../../constants/enum";
import FlexBox from "../../FlexBox";
import Person from "./Person"

import { questions as Qs } from "../../../constants/tempDatabase" // TEMP - pull from database with API

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
  const { setContent, form, morning, people, setPerson, setQuestions } = props

  // Filter people by their type and first letter of their last name
  // Note that this should be the first and only API call. Filter by form and first name

  function selectPerson(person) {
    // Set the selected person
    setPerson(person)

    // Get checkbox index for the current form and filter questions
    // family-morning == 0, family-afternoon == 1, staff-morning == 2, ... 
    const idx = 2 * (form-1) + !morning

    // @TODO API Call in Questionnaire
    const randomize = true; // TEMP - api call
    var questions = Qs.filter(q => q.checkboxes[idx])
    if(randomize) questions.sort(() => Math.random() - 0.5); // Note that this is a biased randomization algorithm
    setQuestions(questions)

    // Render the questionnaire
    setContent(CONTENT.QUESTIONNAIRE)
  }

  return (
    <FlexBox setContent={props.setContent} reset={true}>
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
                handleClick={selectPerson}
              />
            </GridListTile>
          )
        })}
      </GridList>
    </FlexBox>
  )
}