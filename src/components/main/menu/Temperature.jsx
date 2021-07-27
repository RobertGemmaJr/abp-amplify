import { makeStyles } from "@material-ui/styles";
import { Typography, TextField, Grid, Checkbox, Switch} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: "bold",
  },
})) 

function Row(props) {
  return <Grid container item xs={12} justify="center" alignItems="center"> {props.children} </Grid>
}

function Item(props) {
  return <Grid item xs={3}> {props.children} </Grid>
}

function SwitchGrid(props) {
  const {state, classes, topText, bottomText} = props;
  return (
    <Grid container item direction="column" xs={6}>
      <Grid item>
        <Typography className={!state && classes.bold}>
          {topText}
        </Typography>
      </Grid>
      <Grid item>
        {props.children}
      </Grid>
      <Grid item>
        <Typography className={state && classes.bold}>
          {bottomText}
        </Typography>
      </Grid>
    </Grid>
  )
}

const helperText = "Helper text"

export default function Temperature(props) {
  const classes = useStyles();
  const {state, handleCheckboxChange, handleTextChange} = props;

  const toleranceMin = 98.6 - Number(state.newTempTolerance)
  const toleranceMax = Number(state.newTempTolerance) + 98.6

  return (
    <Grid container align="center" spacing={2}>
      {/* Heading */}
      <Row>
        <Typography color="primary" variant="h4" gutterBottom>
          Temperature Settings
        </Typography>
      </Row>

      {/* recordTemperature */}
      <Row>
        <Item>
          <Typography>Record Temperature?</Typography>
        </Item>
        <Item>
          <SwitchGrid 
            topText="Yes" 
            bottomText="No" 
            state={state.newRecordTemperature} 
            classes={classes}
          >
            <Checkbox 
              color="secondary" 
              name="newRecordTemperature"
              checked={state.newRecordTemperature}
              onChange={handleCheckboxChange} 
            />
          </SwitchGrid>
        </Item>
        <Item>
          <Typography variant="caption">
            {helperText}
          </Typography>
        </Item>
      </Row>

      {/* keepTemperature and tempTolerance */}
      <Row>
        <Item>
          <Typography>Keep Temperature?</Typography>
        </Item>
        <Item>
          <SwitchGrid 
            topText="Checkbox" 
            bottomText="Textbox" 
            state={state.newKeepTemperature} 
            classes={classes}
          >
            <Switch
              name="newKeepTemperature"
              checked={state.newKeepTemperature}
              onChange={handleCheckboxChange}
              disabled={!state.newRecordTemperature}
              className={classes.margin}
            />
          </SwitchGrid>
        </Item>
        <Item>
          <TextField 
            id="new-temp-tolerance" 
            name="newTempTolerance"
            label="Tolerance +/- 98.6" 
            type="number"
            value={state.newTempTolerance}
            onChange={handleTextChange}
            variant="outlined"
            color="secondary"
            helperText={
              "A tolerance of " + Number(state.newTempTolerance) +  
              " will pass temperatures from " + toleranceMin.toFixed(2) + 
              " to " + toleranceMax.toFixed(2)
            }
            disabled={!state.newRecordTemperature || !state.newKeepTemperature}
            className={classes.margin}
          />
        </Item>
      </Row>
    </Grid>
  )
}