import { Button, GridList, GridListTile, makeStyles } from '@material-ui/core';

import { CONTENT } from "../../../constants/enum"
import FlexBox from "../../FlexBox"

const useStyles = makeStyles(theme => ({
  gridList: {
    maxWidth: 500,
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
  },
  keys: {
    width: "100%",
    height: "100%",
    fontSize: 25,
    backgroundColor: theme.palette.primary.light,
  }
}))

export default function Keypad(props) {
  const classes = useStyles();
  const {setContent, form, people, setPeople} = props;
  const alphabet = 'ABCDEFGHIJKLMNOPQRTSUVWXYZ'.split('')

  function handleKeypadClick(letter) {
    // Filter people by the form type and the selected letter
    const filtered = people.filter(person => 
      person.type === form && person.fName.charAt(0) === letter
    )
    setPeople(filtered)
    setContent(CONTENT.PEOPLE)
  }

  return (
    <FlexBox setContent={setContent} reset={true}>
      <GridList
        cellHeight={40}
        cols={4}
        spacing={20}
        className={classes.gridList}
      >
        {alphabet.map(letter => {
          return (
            <GridListTile key={letter}>
              <Button
                variant="contained"
                color="primary"
                className={classes.keys}
                onClick={() => handleKeypadClick(letter)}
              >
                {letter}
              </Button>
            </GridListTile>
          )
        })}
      </GridList>
    </FlexBox>
  )
}