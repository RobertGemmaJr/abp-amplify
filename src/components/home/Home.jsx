import React from "react"
import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import familyLogo from "../../media/Health Check Family Logo.png"
import thermometerGuy from "../../media/Thermometer Guy.ico"
import logo from "../../media/logos/Apple Blossom logo solid color.png"
import HomeCard from "./HomeCard"

const useStyles = makeStyles(theme => ({
  outer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  }
}))

export default function Home(props) {
  const classes = useStyles();

  const [menuPrev, setMenuPrev] = React.useState("home")
  function handleMenuClick() {
    if (props.content === "menu") {
      props.setContent(menuPrev)
    } else {
      setMenuPrev(props.content)
      props.setContent("menu")
    }
  }

  return (
    <Box className={classes.outer}>
      <Box className={classes.inner}>
        <HomeCard 
          setContent={props.setContent} 
          setForm={props.setForm}
          key="family"
          image={familyLogo} 
          text="Family Form"
          
        />
        <HomeCard 
          setContent={props.setContent} 
          setForm={props.setForm}
          key="staff"
          image={thermometerGuy} 
          text="Staff Form"
        />
        <HomeCard 
          setContent={props.setContent} 
          setForm={props.setForm}
          key="manual"
          image={logo} 
          text="Manual Entry"
        />
      </Box>

      {/* Menu Button */}
      <Button 
        variant="contained" 
        className={classes.hButton}
        onClick={() => handleMenuClick()}
        color="secondary"
        size="large"
      >
        Menu
      </Button>
    </Box>
  )
}