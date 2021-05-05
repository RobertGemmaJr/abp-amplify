import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  keypad: {

  },
  button : {
    variant: "contained",
    color: "primary",
    // fontSize: "1.5em", // UI Fontsize?
    margin: theme.spacing(1),

    '& hover': {

    }
  }
}))

export default function Keypad(props) {
  const classes = useStyles();

  // Alphabet for keypad letters
  const alphabet = []
  'ABC DEF GHI JKL MNO PQR STU VWX YZ'.split(' ').forEach((trio) => {
    alphabet.push(trio.split(''));
  })
  return (
    <Grid container justify="center">
      {alphabet.map((trio) => {
        // Each row
        return (
          <Grid container item justify="center">
            {trio.map((letter) => {
              return (
                <Grid item>
                  <Button 
                    className={classes.button}
                    variant="contained"
                  >
                    {letter}
                  </Button>
                </Grid>
              )
            })}

            {/* Add search button to last row */}
            <Grid item>{
              (trio.length === 2) && 
              <Button 
                className={classes.button}
                variant="contained">
                {<SearchIcon fontSize="small"/>}
              </Button>
            }</Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}