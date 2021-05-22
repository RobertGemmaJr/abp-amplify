import { Button, GridList, GridListTile, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  gridList: {
    width: "100%",
    maxWidth: 500,
    justifyContent: "center",
    alignContent: "center"
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
    
    console.log(letter) // temp
    props.setContent("people")
  }

  return (
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
  )
}