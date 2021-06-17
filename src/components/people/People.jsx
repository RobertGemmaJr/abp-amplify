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

  // TEMP
  var filteredPeople = []
  var temp = people.filter(person => (person.type === form && person.fName === letter))
  console.log(letter, temp)
  temp.forEach((person) => {
    filteredPeople.push(
      <GridListTile key={person.id}>
        <Person 
          setContent={setContent} 
          setPerson={setPerson}
          id={person.id} 
          name={person.fName + " " + person.lName}
        />
      </GridListTile>
    )
  })

  return (
    <Box display="flex" flexDirection="column" className={classes.box}>
      <GridList 
        cellHeight="auto"
        cols={4} 
        spacing={20} 
        className={classes.gridList}
      >
        {filteredPeople}
      </GridList>
    <ResetButton setContent={setContent}/>
    </Box>
  )
}