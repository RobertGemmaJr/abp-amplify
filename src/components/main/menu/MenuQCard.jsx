import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Button, Card, TextField, Box, ButtonGroup } from "@material-ui/core"
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons"
import DeleteIcon from "@material-ui/icons/Delete"

import { QTYPE } from "../../../constants/enum";
import MenuQSwitch from "./MenuQSwitch"
import MenuQCheckboxes from "./MenuQCheckboxes"

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

export default function MenuQCard(props) {
  const classes = useStyles()
  const { q } = props

  // Hook for question state
  const [state, setState] = React.useState({
    question: q.question,
    response: q.response,
    recordTemp: q.recordTemp,
    checkboxes: q.checkboxes,
  })

  // Renders the question based on its type
  function renderResponse() {
    switch(q.type) {
      case QTYPE.TEMPERATURE:
        return (
          <Box 
            display="flex"
            alignItems="center" 
            justifyContent="flex-start"
            className={classes.question}
          >
            <TextField 
              variant="outlined"
              label="Minimum Temperature"
              autoComplete="off"
              noValidate
              className={classes.group}
              name="question"
              value={q.recordTemp ? "-" : state.question}
              onChange={handleChange}
            />
            <TextField 
              variant="outlined"
              label="Maximum Temperature"
              autoComplete="off"        
              noValidate
              name="response"
              value={q.recordTemp ? "-" : state.response}
              onChange={handleChange}
              className={classes.group}
            />
            <MenuQSwitch 
              state={state} 
              setState={setState}
              switchName="recordTemp"
              switchChecked={state.recordTemp}
              label="Record?"
              className={classes.group}
            />
          </Box> 
        )
      case QTYPE.TEXT:
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
            <TextField 
              variant="outlined"
              label="Response"
              autoComplete="off"        
              noValidate
              className={classes.group}
              name="response"
              value={state.response}
              onChange={handleChange}
            /> 
          </Box>
        )
      case QTYPE.BOOLEAN:
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
            <MenuQSwitch 
              state={state} 
              setState={setState}
              label="Response"
              switchName="response"
              switchChecked={state.response}
              className={classes.group}
            />
          </Box>
        )
      default:
        console.error("Invalid question type")
        break;
    }

  }

  // Handle up click
  function handleUpClick() {
    // Use question's id to move it up one in order
    console.log("Up click", q.id)
  }
  // Handle down click 
  function handleDownClick() {
    // Use question's id to move it down one in order
    console.log("Down Click", q.id)
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
        {/* <TextField 
          variant="outlined"
          label={q.type !== "temp" ? "Question" : "Minimum Temperature"}
          autoComplete="off"
          noValidate 
          fullWidth={q.type !== "temp"}
          className={classes.group}
          name="question"
          value={state.question}
          onChange={handleChange}
        /> */}

        {/* Expected Response */}
        {renderResponse()}

        {/* Checkboxes */}
        <MenuQCheckboxes state={state} setState={setState} className={classes.group}/>
        
        {/* Delete button */}
        <Button className={classes.delete} >
          <DeleteIcon color="secondary"/>
        </Button>
        
      </Box>
  </Card>
  )
}