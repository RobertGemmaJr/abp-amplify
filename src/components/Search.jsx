import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

// import Button from "./Button"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root : {

  },
  button : {
    variant: "contained",
    color: "primary",

    fontSize: "1.5em",

    '& hover': {

    }

  }
}))

export default function Search(props) {
  const classes = useStyles();

  const alphabet = []
  'ABC DEF GHI JKL MNO PQR STU VWX YZ'.split(' ').forEach((trio) => {
    alphabet.push(trio.split(''));
  })

  return (
    <Grid container justify="center">
      {alphabet.map((trio) => {
        // Keypad grid
        return(
          <Grid container  justify="center" margin="auto">
            <Grid item >
              {trio.map((letter) => {
                // Keypad row
                return(
                  // <Button type="Keypad" key={letter} text={letter} />
                  <Button  className={classes.button} >{letter}</Button>
                )
              })}
              {
                // Add search button to last row
                (trio.length === 2) && 
                // <Button type="Keypad" text={<SearchIcon fontSize="medium"/>} />
                <Button variant="contained">{<SearchIcon fontSize="medium"/>}</Button>
              }
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}