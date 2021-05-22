import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Button, FormGroup, FormControlLabel, Card, TextField, Box, Checkbox, ButtonGroup } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  card: {
    
  }
}))

export default function MenuQCard(props) {
  const classes = useStyles()

  // Change return if T/F question or text response?

  // Hook for question state
  // TODO: Set everything from questions database (API call)
  const [state, setState] = React.useState({
    type: "bool",
    question: "Question State",
    expectedResponse: "Yes",
    childMorning: true,
    childAfternoon: true,
    staffMorning: true,
    staffAfternoon: true,
    manual: true,
  })

  const handleCheckboxChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked})
  }
  

  return (
    <Card m={1} className={classes.card}>
      <Box 
        p={2}
        display="flex" 
        justifyContent="space-evenly" 
        alignItems="center"
      >

        {/* Up and Down Arrows */}
        <ButtonGroup orientation="vertical" color="secondary">
          <Button 
            variant="contained"
            // onClick={}
          >
            <ArrowDropUp />
          </Button>
          <Button
            variant="contained"
            // onClick={}
          >
            <ArrowDropDown />
          </Button>
        </ButtonGroup>

        {/* Question */}
        <TextField 
          name="question"
          label="Question" 
          value={state.question}
          // onChange={}
          variant="outlined"
          noValidate fullWidth
        />

        {/* Expected Response */}
        <TextField 
          name="expectedResponse"
          label="Response" 
          value={state.expectedResponse}
          // onChange={}
          variant="outlined"
          noValidate
        />

        {/* Checkboxes */}
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox 
                color="secondary" 
                name="childMorning"
                checked={state.childMorning}
                onChange={handleCheckboxChange} 
              />
            }
            label="Morning"
            labelPlacement="bottom"
          />
        </FormGroup>

        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox 
                color="secondary" 
                name="childAfternoon"
                checked={state.childAfternoon}
                onChange={handleCheckboxChange} 
              />
            }
            label="Afternoon"
            labelPlacement="bottom"
          />
        </FormGroup>
        
        {/* Delete button */}
        <Button>
          <DeleteIcon color="secondary" />
        </Button>
        
      </Box>
  </Card>
  )
}