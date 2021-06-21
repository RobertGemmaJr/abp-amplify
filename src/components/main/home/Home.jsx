import React from "react"
import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { CONTENT, FORM } from "../../../constants/enum"
import familyLogo from "../../../media/Health Check Family Logo.png"
import thermometerGuy from "../../../media/Thermometer Guy.ico"
import logo from "../../../media/logos/Apple Blossom logo solid color.png"

import HomeCard from "./HomeCard"

const useStyles = makeStyles(theme => ({
  outer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inner: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  }
}))

export default function Home(props) {
  const classes = useStyles();
  const {setContent, setForm} = props;

  return (
    <Box className={classes.outer}>
      <Box className={classes.inner}>
        <HomeCard 
          setContent={setContent} 
          setForm={setForm}
          key={FORM.FAMILY}
          form={FORM.FAMILY}
          image={familyLogo} 
          text="Family Form"
          
        />
        <HomeCard 
          setContent={setContent} 
          setForm={setForm}
          key={FORM.STAFF}
          form={FORM.STAFF}
          image={thermometerGuy} 
          text="Staff Form"
        />
        <HomeCard 
          setContent={setContent} 
          setForm={setForm}
          key={FORM.MANUAL}
          form={FORM.MANUAL}
          image={logo} 
          text="Manual Entry"
        />
      </Box>

      {/* Menu Button */}
      <Button 
        variant="contained" 
        className={classes.hButton}
        onClick={() => setContent(CONTENT.MENU)}
        color="secondary"
        size="large"
      >
        Menu
      </Button>
    </Box>
  )
}