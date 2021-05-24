import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import familyLogo from "../../media/Health Check Family Logo.png"
import thermometerGuy from "../../media/Thermometer Guy.ico"
import logo from "../../media/logos/Apple Blossom logo solid color.png"
import HomeCard from "./HomeCard"

const useStyles = makeStyles(theme => ({
  home: {
    
  }
}))

export default function Home(props) {
  const classes = useStyles();

  return (
    <Box
      width="100%" 
      display="flex" 
      alignItems="center"
      justifyContent="center"
      className={classes.home}
    >
      <HomeCard 
        setContent={props.setContent} 
        key="family"
        image={familyLogo} 
        text="Family Form"
        
      />
      <HomeCard 
        setContent={props.setContent} 
        key="staff"
        image={thermometerGuy} 
        text="Staff Form"
      />
      <HomeCard 
        setContent={props.setContent} 
        key="manual"
        image={logo} 
        text="Manual Entry"
      />
    </Box>
  )
}