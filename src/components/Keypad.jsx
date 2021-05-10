import { Button, GridList, GridListTile, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  gridList: {
    maxWidth: 500,
    justifyContent: "center",
    alignContent: "center"
  },
  button: {
    width: "100%",
    backgroundColor: theme.palette.primary.light,
    fontSize: 25,
  }
}))

export default function Keypad(props) {
  const classes = useStyles();
  const alphabet = 'ABCDEFGHIJKLMNOPQRTSUVWXYZ'.split('')

  function handleKeypadClick(setContent) {
    setContent("people")
  }
  return (
    <GridList
      cellHeight="auto"
      cols={4} 
      spacing={25}
      className={classes.gridList}
    >
      {alphabet.map(letter => {
        return (
          <GridListTile cols={1}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleKeypadClick(props.setContent)}
            >
              {letter}
            </Button>
          </GridListTile>
        )
      })}
    </GridList>
  )
}