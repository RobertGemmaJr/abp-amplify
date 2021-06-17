import { Box, GridList, GridListTile } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import Person from "./Person"
import ResetButton from "../ResetButton"

import { people } from "../../constants/tempDatabase" // TEMP - pull from database with API

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
  const { setContent, form, letter, setPerson } = props

  // Filter people by their type and first letter of their last name
  var filteredPeople = people.filter(person => 
    person.type === form && person.fName.charAt(0) === letter
  )

  return (
    <Box display="flex" flexDirection="column" className={classes.box}>
      <GridList 
        cellHeight="auto"
        cols={4} 
        spacing={20} 
        className={classes.gridList}
      >
        {filteredPeople.map(person => {
          return (
            <GridListTile key={person.id}>
              <Person 
                setContent={setContent} 
                setPerson={setPerson}
                id={person.id} 
                name={person.fName + " " + person.lName}
              />
            </GridListTile>
          )
        })}
      </GridList>
    <ResetButton setContent={setContent}/>
    </Box>
  )
}