
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Button, Checkbox } from "@material-ui/core"; 

const useStyles = makeStyles(theme => ({
  question: {
    width: "100%",
    height: "100%",
  },
  text: {
    minHeight: "50%",
    margin: theme.spacing(3),
    fontSize: 30,
    fontWeight: "bold",
    alignContent: "center",
  },
  answer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",

    '& > *': {
      margin: theme.spacing(2, 5),
    },
  },
}))

export default function TemperatureQuestion(props) {
  const classes = useStyles();
  const { settings, checked, setChecked, handleClick, } = props;

  return (
    <Box alignContent="center" justifyContent="center" className={classes.question}>

      {settings.recordTemperature &&
        <Box className={classes.text}>
          <Typography align="center" className={classes.text}>
            Temperature
          </Typography>

          <Typography align="center">
            Please return this device to the staff member.
          </Typography>


          {settings.keepTemperature ?
              <Checkbox 
              />
            :
              null
          }
        </Box>
        
      }
      
      <Box className={classes.answer}>
        <Button
          variant="contained"
          color="primary" 
          size="large"
          onClick={() => handleClick()}
        >
          Submit
        </Button>
      </Box>
    </Box>
  )
}