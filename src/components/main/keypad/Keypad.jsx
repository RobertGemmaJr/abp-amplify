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
  const alphabet = 'ABCDEFGHIJKLMNOPQRTSUVWXYZ'.split('')

  function handleKeypadClick(letter) {
    props.setLetter(letter)
    props.setContent(CONTENT.PEOPLE)
  }

  return (
    <FlexBox setContent={props.setContent} reset={true}>
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