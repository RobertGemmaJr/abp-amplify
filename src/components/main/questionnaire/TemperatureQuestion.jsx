
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Button, Checkbox, TextField } from "@material-ui/core"; 

const useStyles = makeStyles(theme => ({
  inner: {
    flexGrow: 1,
  },
  temperature: {
    fontSize: 30,
    fontWeight: "bold",
  },
  checkbox: {
    transform: "scale(3)",
  },
  submit: {
    margin: theme.spacing(3),
  },
}))

export default function TemperatureQuestion(props) {
  const classes = useStyles();
  const { settings, temperature, setTemperature, handleClick, } = props;

  // Handle change for text items
  const handleTextChange = (event) => {
    setTemperature(event.target.value)
  }

  // Handle change for checkbox items
  const handleCheckboxChange = (event) => {
    setTemperature(event.target.checked)
  }
  

  const helperText = (
    <Typography align="center">
      Thank you! Please return this device to a staff member.
    </Typography>
  )
  
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignContent="center" 
      width={1} height={1}
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
          {helperText}
          
          {settings.keepTemperature ?
              <TextField 
                id="temperatureText" 
                name="temperature"
                label="Temperature"
                type="number"
                value={ !isNaN(parseFloat(temperature)) ? temperature : "" }
                onChange={handleTextChange}
                variant="outlined"
                helperText={ isNaN(parseFloat(temperature)) && "Please enter a valid number"}
                required
              />
            :
              <Checkbox 
                id="temperatureCheckbox"
                name="temperature"
                checked={temperature}
                onChange={handleCheckboxChange}
                color="primary"
                className={classes.checkbox}
              />
          }
        </Box> 
      }
      
      {/* Submit button */}
      <Box
        display="flex" 
        flexDirection="column" 
        justifyContent="center"
        alignItems="center"
        className={classes.inner}
      >
        {settings.recordTemperature ? null : helperText}
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