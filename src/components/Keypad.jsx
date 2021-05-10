import { GridList, GridListTile, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  gridList: {
    width: "50%",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.light,
  }
}))

export default function Keypad(props) {
  const classes = useStyles();

  // Alphabet for keypad letters
  const alphabet = 'ABCDEFGHIJKLMNOPQRTSUVWXYZ'.split('')
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
              onClick={() => props.setContent("people")}
            >
              {letter}
            </Button>
          </GridListTile>
        )
      })}
    </GridList>
  )
}