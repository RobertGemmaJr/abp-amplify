import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  button : {
    margin: theme.spacing(1, 2),
    width: "75%",
    height: "75%",
    backgroundColor: theme.palette.primary.light,
  }
}))

export default function Keypad(props) {
  const classes = useStyles();

  // Alphabet for keypad letters
  const alphabet = []
  'ABC DEF GHI JKL MNO PQR STU VWX YZ'.split(' ').forEach((trio) => {
    alphabet.push(trio.split(''));
  })

  // Seperate button to avoid repeated code
  function MyButton(text) {
    return (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => props.setContent("people")}
      >
        {text}
      </Button> 
    )
  }
  
  return (
    <Grid container>
      {alphabet.map((trio) => {
        // Each row
        return (
          <Grid container justify="center">
            {trio.map((letter) => {
              return (
                <Grid item>
                  {MyButton(letter)}
                </Grid>
              )
            })}
            <Grid item>
              {
                // Add search button to last row
                (trio.length === 2) && 
                MyButton(<SearchIcon fontSize="small"/>)
              }
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}