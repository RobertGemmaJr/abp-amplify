import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Button, Card, TextField, Box, ButtonGroup } from "@material-ui/core"
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons"
import DeleteIcon from "@material-ui/icons/Delete"

import { Qtype } from "../../../models";
import CardSwitch from "./CardSwitch"
import CardCheckboxes from "./CardCheckboxes"

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(1, 0)
  },
  group: {
    margin: theme.spacing(0, 1)
  },
  delete: {
    padding: theme.spacing(0)
  },
  question: {
    width: "100%",
  },
}))

export default function MenuCard(props) {
  const classes = useStyles()
  const { q } = props

  // Hook for question state
  const [state, setState] = React.useState({
    question: q.question,
    response: q.expectedResponse,
    recordTemp: q.recordTemp,
    checkboxes: q.checkboxes,
  })

  // Renders the question based on its type
  function renderResponse() {
    switch(q.type) {
      case Qtype.BOOLEAN:
        return (
          <Box
            display="flex"
            alignItems="center" 
            justifyContent="flex-start"
            className={classes.question}
          >
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
            <CardSwitch 
              state={state} 
              setSwitch={setSwitch}
              label="Response"
              className={classes.group}
            />
          </Box>
        )
      case Qtype.TEXT:
        // Not implemented yet
        return null; 
      case Qtype.TEMP:
        // Not implemented yet
        return null; 
      case Qtype.TEMP_CHECKBOX:
          // Not implemented yet
        return null;
      default:
        console.error("Invalid question type")
        break;
    }
  }

  // Handle up click
  function handleUpClick() {
    // Use question's index to move it up one in order
    console.log("Up click", q.index)
  }
  // Handle down click 
  function handleDownClick() {
    // Use question's index to move it down one in order
    console.log("Down Click", q.index)
  }

  // Handle change for switch
  function setSwitch(value) {
    setState({...state, "response": value});
  }
  // Handle change for checkboxes
  function setCheckboxes(idx, value) {
      var checkboxes = state.checkboxes;
      checkboxes[idx] = value;
      setState({...state, [state.checkboxes]: checkboxes})
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

        {/* Expected Response */}
        {renderResponse()}

        {/* Checkboxes */}
        <CardCheckboxes state={state} setCheckboxes={setCheckboxes} className={classes.group}/>

        {/* Delete button */}
        <Button className={classes.delete} >
          <DeleteIcon color="secondary"/>
        </Button>
        
      </Box>
  </Card>
  )
}