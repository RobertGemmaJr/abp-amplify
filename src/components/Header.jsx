import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root : {
    display: "flex",
    alignItems: "center",
  },
  '& h1': {
    marginLeft: "10px",
  },
  '& div': {
    marginLeft: "auto",
    marginRight: "10px",
  }
}))


export default function Header(props) {
  const { resetClick, menuClick } = props;
  
  return(
    <Box display="flex" flexDirection="row" bgcolor="background.paper">
      <h1>Apple Blossom Health Check</h1>
        <Box m={1}>
          <Button variant="contained" color="primary" onClick={resetClick}>RESET</Button>
          <Button variant="contained" color="primary" onClick={menuClick}>Menu</Button>
          
          {/* Temp - don't know if we'll keep thermometer */}
          <Button variant="contained" color="secondary">Thermometer</Button>
        </Box>
    </Box>
  )
}