import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import Button from "./Button"

/**
 * Body of application while searching for a family/staff
 * 
 * @todo Individual rows should scale to fit display
 * 
 * @returns Search component of the application. 
 */
export default function Search(props) {
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
                  <Button type="Keypad" key={letter} text={letter} />
                )
              })}
              {
                // Add search button to last row
                (trio.length === 2) && 
                <Button type="Keypad" text={<SearchIcon fontSize="medium"/>} />
              }
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}