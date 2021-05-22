import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Button, Card, TextField, Box, ButtonGroup } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons"

import MenuQCheckboxes from "./MenuQCheckboxes"

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(1, 0)
  },
  group: {
    margin: theme.spacing(0, 1)
  }
}))

export default function MenuQCard(props) {
  const classes = useStyles()

  // Change return if T/F question or text response?

  // Hook for question state
  // TODO: Set everything from questions database (API call)
  const [state, setState] = React.useState({
    type: "text",
    question: "Question State",
    expectedResponse: "Yes",
    childMorning: true,
    childAfternoon: true,
    staffMorning: true,
    staffAfternoon: true,
    manualMorning: true,
    manualAfternoon: true,
  })

  // Handle up click
  function handleUpClick(id) {
    // Use question's id to move it up one in order
  }
  // Handle down click 
  function handleDownClick(id) {
    // Use question's id to move it down one in order
  }
  // Handle change for text values
  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value})
  }
  

  return (
    <Card className={classes.card} raised>
      <Box 
        p={2}
        display="flex" 
        justifyContent="space-evenly" 
        alignItems="center"
      >

        {/* Up and Down Arrows */}
        <ButtonGroup orientation="vertical" color="secondary" className={classes.group}>
          <Button 
            variant="contained"
            onClick={() => handleUpClick(props.id)}
          >
            <ArrowDropUp />
          </Button>
          <Button
            variant="contained"
            onClick={() => handleDownClick(props.id)}
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
          className={classes.group}
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
          className={classes.group}
          name="expectedResponse"
          value={state.expectedResponse}
          onChange={handleChange}
          
        />

        {/* Checkboxes */}
        <MenuQCheckboxes state={state} setState={setState} className={classes.group}/>
        
        {/* Delete button */}
        <Button className={classes.group}>
          <DeleteIcon color="secondary"/>
        </Button>
        
      </Box>
  </Card>
  )
}