import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Button, Card, TextField, Box, ButtonGroup } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons"

import MenuQCheckboxes from "./MenuQCheckboxes"

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
    manualMorning: true,
    manualAfternoon: true,
  })

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value})
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
          variant="outlined"
          label="Question"
          autoComplete="off"
          noValidate fullWidth
          name="question"
          value={state.question}
          onChange={handleChange}
        />

        {/* Expected Response */}
        <TextField 
          variant="outlined"
          label="Response"
          autoComplete="off"        
          noValidate
          name="expectedResponse"
          value={state.expectedResponse}
          onChange={handleChange}
          
        />

        {/* Checkboxes */}
        <MenuQCheckboxes state={state} setState={setState}/>
        
        {/* Delete button */}
        <Button>
          <DeleteIcon color="secondary" />
        </Button>
        
      </Box>
  </Card>
  )
}