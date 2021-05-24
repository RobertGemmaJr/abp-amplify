import { Box, Button, GridList, GridListTile, makeStyles } from '@material-ui/core';

import ResetButton from "./ResetButton"

const useStyles = makeStyles(theme => ({
  gridList: {
    width: "100%",
    maxWidth: 500,
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
  },
  button: {
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
    // Filter people but first letter of their last name
    props.setContent("people")
  }

  return (
    <Box display="flex" flexDirection="column">
      <GridList
        cellHeight={50}
        cols={4}
        spacing={20}
        className={classes.gridList}
      >
        {alphabet.map(letter => {
          return (
            <GridListTile>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
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