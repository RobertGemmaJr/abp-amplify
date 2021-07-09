import React from "react"
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Content, Ptype } from "../../../models";
import familyLogo from "../../../media/Health Check Family Logo.png"
import thermometerGuy from "../../../media/Thermometer Guy.ico"
import logo from "../../../media/logos/Apple Blossom logo solid color.png"

import FlexBox from "../../FlexBox";
import HomeCard from "./Card"

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
  const {setContent, form, setForm} = props;

  return (
    <FlexBox setContent={setContent}>
      <Box className={classes.inner}>
        <HomeCard 
          setContent={setContent} 
          form={form} setForm={setForm}
          key={Ptype.FAMILY}
          ptype={Ptype.FAMILY}
          image={familyLogo} 
          text="Family Form"
          
        />
        <HomeCard 
          setContent={setContent} 
          form={form} setForm={setForm}
          key={Ptype.STAFF}
          ptype={Ptype.STAFF}
          image={thermometerGuy} 
          text="Staff Form"
        />
        <HomeCard 
          setContent={setContent} 
          form={form} setForm={setForm}
          key={Ptype.MANUAL}
          ptype={Ptype.MANUAL}
          image={logo} 
          text="Manual Entry"
        />
      </Box>
      <Button 
        variant="contained" 
        className={classes.hButton}
        onClick={() => setContent(Content.MENU)}
        color="secondary"
        size="large"
      >
        Menu
      </Button>
    </FlexBox>
  )
}