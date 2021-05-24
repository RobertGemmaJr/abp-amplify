import { makeStyles } from "@material-ui/styles";
import { Box, Checkbox, Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  grid: {
    flexGrow: 1,
  },
  row: {
  },
  checkbox: {
    padding: theme.spacing(0.1),
  }
}))

function Row(props) {
  return (
    <Grid container item xs={12} alignItems="center">
      {props.children}
    </Grid>
  )
}

export default function MenuQCheckboxes(props) {
  const classes = useStyles();
  const {state, setState} = props;

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  }

  return (
    <Box className={classes.grid}>
    <Grid container align="center">
      <Row className={classes.row}>
        <Grid item xs/>
        <Grid item xs>
          <Typography>AM</Typography>
        </Grid>
        <Grid item xs>
          <Typography>PM</Typography>
        </Grid>
      </Row>
      
      <Row className={classes.row}>
        <Grid item xs>
          <Typography align="right">Family</Typography>
        </Grid>
        <Grid item xs>
          <Checkbox 
            name="familyMorning"
            checked={state.familyMorning}
            onChange={handleChange}
            className={classes.checkbox}
          />
        </Grid>
        <Grid item xs>
          <Checkbox 
            name="familyAfternoon"
            checked={state.familyAfternoon}
            onChange={handleChange}
            className={classes.checkbox}
          />
        </Grid>
      </Row>

      <Row className={classes.row}>
        <Grid item xs>
          <Typography align="right">Staff</Typography>
        </Grid>
        <Grid item xs>
          <Checkbox 
            name="staffMorning"
            checked={state.staffMorning}
            onChange={handleChange}
            className={classes.checkbox}
          />
        </Grid>
        <Grid item xs>
          <Checkbox 
            name="staffAfternoon"
            checked={state.staffAfternoon}
            onChange={handleChange}
            className={classes.checkbox}
          />
        </Grid>
      </Row>

      <Row className={classes.row}>
        <Grid item xs align="center">
          <Typography align="right">Manual</Typography>
        </Grid>
        <Grid item xs>
          <Checkbox 
            name="manualMorning"
            checked={state.manualMorning}
            onChange={handleChange}
            className={classes.checkbox}
          />
        </Grid>
        <Grid item xs>
          <Checkbox 
            name="manualAfternoon"
            checked={state.manualAfternoon}
            onChange={handleChange}
            className={classes.checkbox}
          />
        </Grid>
      </Row>
    </Grid>
    </Box>
  )
}