import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import Button from "./Button"

/**
 * Body of application while searching for a family/staff
 * @returns Search component of the application. 
 */
export default function Search() {
  const alphabet = []
  'ABC DEF GHI JKL MNO PQR STU VWX YZ'.split(' ').forEach((trio) => {
    alphabet.push(trio.split(''));
  })

  return (
    <div>
      <Grid container margin="auto">
        {alphabet.map((trio) => {
          // Keypad grid
          return(
            <Grid container xs={12} justify="center">
              <Grid item xs={3}>
                {trio.map((letter) => {
                  // Keypad row
                  return(
                    <Button key={letter} text={letter} type="Keypad" />
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
    </div>
  )
}