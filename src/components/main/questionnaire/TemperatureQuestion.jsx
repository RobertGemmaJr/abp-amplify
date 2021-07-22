
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Button, Checkbox, TextField } from "@material-ui/core"; 

const useStyles = makeStyles(theme => ({
  outer: {
    width: "100%",
    height: "100%",
  },
  inner: {
    flexGrow: 1,
  },
  temperature: {
    fontSize: 30,
    fontWeight: "bold",
  },
  submit: {
    margin: theme.spacing(3),
  },
}))

export default function TemperatureQuestion(props) {
  const classes = useStyles();
  const { settings, temperatureRes, setTemperatureRes, handleClick, } = props;

  // Handle change for text temperature
  const handleTextChange = (event) => {
    setTemperatureRes(event.target.value)
  }

  // Handle change for checkbox temperature
  const handleCheckChange = (event) => {
    setTemperatureRes(event.target.checked)
  }

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignContent="center" 
      className={classes.outer}
    >

      {/* Temperature Question */}
      {settings.recordTemperature &&
        <Box 
          display="flex" 
          flexDirection="column" 
          justifyContent="space-between"
          alignItems="center"
          className={classes.inner}
        >
          <Typography align="center" className={classes.temperature}>
            Temperature Check
          </Typography>
        
          {!settings.keepTemperature ?
              <Checkbox 
                checked={temperatureRes}
                onChange={handleCheckChange}
              />
            :
              <TextField 
                id="temperature-response" 
                name="temperatureResponse"
                label="Temperature"
                value={temperatureRes}
                onChange={handleTextChange}
                variant="outlined"
                helperText="Please enter a valid number"
              />
          }
        </Box> 
      }
      
      {/* Submit button */}
      <Box
        display="flex" 
        flexDirection="column" 
        justifyContent="flex-end"
        alignItems="center"
        className={classes.inner}
      >
        <Typography align="center">
          Thank you! Please return this device to a staff member.
        </Typography>
        <Button
            variant="contained"
            color="primary" 
            size="large"
            className={classes.submit}
            onClick={() => handleClick()}
          >
            Submit
        </Button>
      </Box>
    </Box>
  )
}