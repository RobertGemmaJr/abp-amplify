import { Box, GridList, GridListTile } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import Person from "./Person"
import ResetButton from "../ResetButton"

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

  // TEMP
  var people = []
  const id = 12345 // Will be ID from database
  for(var i=0; i < 15; i++) {
    people.push(
      <GridListTile>
        <Person setContent={props.setContent} key={i} id={id} />
      </GridListTile>
    )
  }

  return (
    <Box display="flex" flexDirection="column" className={classes.box}>
      <GridList 
        cellHeight="auto"
        cols={4} 
        spacing={20} 
        className={classes.gridList}
      >
        {people}
      </GridList>
    <ResetButton setContent={props.setContent}/>
    </Box>
  )
}