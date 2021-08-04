import React from "react"
import { Box, Grid, Typography, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Ptype, Time } from "../../../models";
import familyLogo from "../../../media/Health Check Family Logo.png"
import thermometerGuy from "../../../media/Thermometer Guy.ico"
import logo from "../../../media/logos/Apple Blossom logo solid color.png"

import FlexBox from "../../FlexBox";
import Card from "./Card"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: "bold",
  },
}))

export default function Home(props) {
  const classes = useStyles();
  const {setContent, form, setForm} = props;

  // Check if time is morning
  function isMorning() {
    return form.time === Time.MORNING
  }

  // Handle change for checkbox items
  const handleChange = (event) => {
    setForm({
      ...form, 
      time: event.target.checked ? Time.MORNING : Time.AFTERNOON
    })
  }
  

  return (
    <FlexBox justifyContent="space-evenly">
      <Box display="flex" alignItems="center" width={1}>
        <Card 
          setContent={setContent} 
          form={form} setForm={setForm}
          key={Ptype.FAMILY}
          ptype={Ptype.FAMILY}
          image={familyLogo} 
          text="Family Form"
        />
        <Card 
          setContent={setContent} 
          form={form} setForm={setForm}
          key={Ptype.STAFF}
          ptype={Ptype.STAFF}
          image={thermometerGuy} 
          text="Staff Form"
        />
        <Card 
          setContent={setContent} 
          form={form} setForm={setForm}
          key={Ptype.MANUAL}
          ptype={Ptype.MANUAL}
          image={logo} 
          text="Manual Entry"
        />
      </Box>

      {/* Morning Switch */}
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <Typography variant="h4" className={!isMorning() ? classes.bold : null}>
            Afternoon
          </Typography>
        </Grid>
        <Grid item>
          <Switch checked={isMorning()} onChange={handleChange}/>
        </Grid>
        <Grid item>
          <Typography variant="h4" className={isMorning() ? classes.bold : null}>
            Morning
          </Typography>
        </Grid>
      </Grid>
    </FlexBox>
  )
}