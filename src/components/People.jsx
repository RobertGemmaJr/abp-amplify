import { GridList, GridListTile } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import Person from "./Person"

const useStyles = makeStyles(theme => ({
  gridList: {
    width: "100%",
    height: "100%",
  },
}))

export default function People(props) {
  const classes = useStyles();

  var temp = []
  for(var i=0; i < 16; i++) {
    temp.push(
      <GridListTile>
        <Person />
      </GridListTile>
    )
  }

  return (
    <GridList 
      cellHeight="auto"
      cols={4} 
      spacing={5} 
      className={classes.gridList}
    >
    {temp}
    </GridList>
  )
}