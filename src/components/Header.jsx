import styled from "styled-components";

import { useTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
  const classes = useStyles();
  const { resetClick, menuClick } = props;
  
  return(
    <header className={classes.root}>
      <h1>Apple Blossom Health Check</h1>
        <div>
          <Button color="primary" onClick={resetClick}>RESET</Button>
          <Button color="primary" onClick={menuClick}>Menu</Button>
          
          {/* Temp - don't know if we'll keep thermometer */}
          <Button color="secondary">RESET</Button>
        </div>            
    </header >
  )
}