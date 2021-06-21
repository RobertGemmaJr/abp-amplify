import { Box, Button, GridList, GridListTile, makeStyles } from '@material-ui/core';

import { CONTENT } from "../../../constants/enum"
import ResetButton from "../../ResetButton"

const useStyles = makeStyles(theme => ({
  box: {
    width: "100%",
    alignItems: "center",
  },
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
    <Box display="flex" flexDirection="column" className={classes.box}>
      <GridList
        cellHeight={50}
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
      <ResetButton setContent={props.setContent}/>
    </Box>
  )
}