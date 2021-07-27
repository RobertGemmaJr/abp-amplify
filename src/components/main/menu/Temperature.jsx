import { Typography, TextField, Grid, Checkbox, Switch} from "@material-ui/core";

function Row(props) {
  return <Grid container item xs={12} justify="center" alignItems="center"> {props.children} </Grid>
}

function Center(props) {
  return <Grid item xs={12}> {props.children} </Grid>
}
function Left(props) {
  return <Grid item xs={3}> {props.children} </Grid>
}

function Right(props) {
  return <Grid item xs={6}> {props.children} </Grid>
}

export default function Temperature(props) {
  const {state, handleCheckboxChange, handleTextChange} = props;

  return (
    <Grid container align="center">
      <Row>
        <Center>
          <Typography color="primary" variant="h4" gutterBottom>
            Temperature Settings
          </Typography>
          <Typography variant="body2">
            Helper Text
          </Typography>
        </Center>
      </Row>

      <Row>
        <Left>
          <Typography>Record Temperature?</Typography>
        </Left>
        <Right>
          <Checkbox 
            color="secondary" 
            name="newRecordTemperature"
            checked={state.newRecordTemperature}
            onChange={handleCheckboxChange} 
          />
        </Right>
      </Row>

      <Row>
        <Left>
          <Typography>Keep Temperature?</Typography>
        </Left>
        <Right>
          <Switch
            name="newKeepTemperature"
            checked={state.newKeepTemperature}
            onChange={handleCheckboxChange}
            disabled={!state.newRecordTemperature}
          />
        </Right>
      </Row>

      <Row>
        <Left>
          <Typography>Tolerance</Typography>
        </Left>
        <Right>
          <TextField 
            id="new-temp-tolerance" 
            name="newTempTolerance"
            label="Tolerance +/- 98.6" 
            type="number"
            value={state.newTempTolerance}
            onChange={handleTextChange}
            variant="outlined"
            color="secondary"
            helperText={"A tolerance of 2 will pass temperatures from 96.6-100.6"}
            disabled={!state.newRecordTemperature || !state.newKeepTemperature}
          />
        </Right>
      </Row>
      <Row>
          <Typography align="center" variant="body2">
            Helper Text
          </Typography>
      </Row>
    </Grid>
  )

}