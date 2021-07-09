import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Box, Checkbox, Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  grid: {
    flexGrow: 1,
    margin: theme.spacing(0, 1)
  },
  row: {
  },
  checkbox: {
    padding: theme.spacing(0.1),
  }
}))

function Row(props) {
  return <Grid container item alignItems="center"> {props.children} </Grid>
}

export default function CardCheckboxes(props) {
  const classes = useStyles();
  const {state, setCheckboxes} = props;

  // Call setCheckboxes from <MenuQCard> on change
  const handleChange = (event) => {
    const idx = parseInt(event.target.name);
    setCheckboxes(idx, event.target.checked)
  }

  return (
    <Box className={classes.grid}>
      <Grid container align="center">
        {/* Heading */}
        <Row className={classes.row}>
          <Grid item xs/>
          <Grid item xs>
            <Typography>AM</Typography>
          </Grid>
          <Grid item xs>
            <Typography>PM</Typography>
          </Grid>
        </Row>

        {/* Family */}
        <Row className={classes.row}>
          <Grid item xs>
            <Typography align="right">Family</Typography>
          </Grid>
          <Grid item xs>
            <Checkbox 
              name="0"
              checked={state.checkboxes[0]}
              onChange={handleChange}
              className={classes.checkbox}
            />
          </Grid>
          <Grid item xs>
            <Checkbox 
              name="1"
              checked={state.checkboxes[1]}
              onChange={handleChange}
              className={classes.checkbox}
            />
          </Grid>
        </Row>

        {/* Staff */}
        <Row className={classes.row}>
          <Grid item xs>
            <Typography align="right">Staff</Typography>
          </Grid>
          <Grid item xs>
            <Checkbox 
              name="2"
              checked={state.checkboxes[2]}
              onChange={handleChange}
              className={classes.checkbox}
            />
          </Grid>
          <Grid item xs>
            <Checkbox 
              name="3"
              checked={state.checkboxes[3]}
              onChange={handleChange}
              className={classes.checkbox}
            />
          </Grid>
        </Row>

        {/* Manual */}
        <Row className={classes.row}>
          <Grid item xs align="center">
            <Typography align="right">Manual</Typography>
          </Grid>
          <Grid item xs>
            <Checkbox 
              name="4"
              checked={state.checkboxes[4]}
              onChange={handleChange}
              className={classes.checkbox}
            />
          </Grid>
          <Grid item xs>
            <Checkbox 
              name="5"
              checked={state.checkboxes[5]}
              onChange={handleChange}
              className={classes.checkbox}
            />
          </Grid>
        </Row>
  
      </Grid>
    </Box>
  )
}