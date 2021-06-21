import { Box, GridList, GridListTile } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { CONTENT } from "constants/enum";
import ResetButton from "../../ResetButton"
import Person from "./Person"

import { people as everyone, questions as Qs } from "constants/tempDatabase" // TEMP - pull from database with API

const useStyles = makeStyles(theme => ({
  box: {
    width: "100%",
  },
  gridList: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
}))

export default function People(props) {
  const classes = useStyles();
  const { setContent, form, morning, letter, setPerson, setQuestions } = props

  // Filter people by their type and first letter of their last name
  // Note that this should be the first and only API call. Filter by form and first name
  const people = everyone.filter(person => 
    person.type === form && person.fName.charAt(0) === letter
  )

  function selectPerson(person) {
    // Set the selected person
    setPerson(person)

    // Get checkbox index for the current form and filter questions
    // family-morning == 0, family-afternoon == 1, staff-morning == 2, ... 
    const idx = 2 * (form-1) + !morning

    // Note that this should be the only API call
    const questions2 = Qs.filter(q => q.checkboxes[idx])
    setQuestions(questions2)

    // Render the questionnaire
    setContent(CONTENT.QUESTIONNAIRE)
  }

  return (
    <Box display="flex" flexDirection="column" className={classes.box}>
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
      <ResetButton setContent={setContent}/>
    </Box>
  )
}