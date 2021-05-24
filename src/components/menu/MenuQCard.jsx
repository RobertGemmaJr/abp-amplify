import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Grid, Button, Card, TextField, Box, ButtonGroup, FormControlLabel, Switch, Typography } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons"

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
  }
}))

export default function MenuQCard(props) {
  const classes = useStyles()
  const { q } = props

  // Change return if T/F question or text response?

  // Hook for question state
  // TODO: Set everything from questions database (API call)
  const [state, setState] = React.useState({
    question: q.question,
    response: q.response,
    checkboxes: q.checkboxes,
  })

  // Handle up click
  function handleUpClick() {
    // Use question's id to move it up one in order
    console.log(q.id)
  }
  // Handle down click 
  function handleDownClick() {
    // Use question's id to move it down one in order
  }
  // Handle change for text values
  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value})
  }
  const toggleSwitch = (event) => {
    setState({...state, [event.target.name]: event.target.checked });
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
          label={q.type !== "temp" ? "Question" : "Minimum Temperature"}
          autoComplete="off"
          noValidate 
          fullWidth={q.type !== "temp"}
          className={classes.group}
          name="question"
          value={state.question}
          onChange={handleChange}
        />

        {/* Expected Response */}
        {q.type !== "bool" ?
          <TextField 
            variant="outlined"
            label={q.type !== "temp" ? "Response" : "Maximum Temperature"}
            autoComplete="off"        
            noValidate
            className={classes.group}
            name="response"
            value={state.response}
            onChange={handleChange}
          /> 
        :
          <Grid container direction="column" xs={2} className={classes.group}>
            <Grid item>
              <FormControlLabel
              control={
                <Switch 
                  name="response"
                  checked={state.response}
                  onChange={toggleSwitch}
                />
              }
              label="Response"
              labelPlacement="top"
              className={classes.group}
            />
            </Grid>
            <Grid item>
              <Typography variant="body2" align="center">
                {state.response ? "Yes" : "No"}
              </Typography>
            </Grid>
          </Grid>

        }

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