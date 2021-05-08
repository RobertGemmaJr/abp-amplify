import { Container, GridList, GridListTile } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import Person from "./Person"

const useStyles = makeStyles(theme => ({
  people: {
  },
  gridList: {
  },
}))

export default function People(props) {
  const classes = useStyles();

  var temp = []
  for(var i=0; i < 15; i++) {
    temp.push(
      <GridListTile cols={1}>
        <Person />
      </GridListTile>
    )
  }

  return (
    <Container disableGutters className={classes.people}>
      <GridList 
        cellHeight={150}
        cols={4} 
        spacing={5} 
        className={classes.gridList}
      >
      {temp}
      </GridList>
    </Container>
  )
}