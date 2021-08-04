import { TextField, Box } from "@material-ui/core";

export default function NewTitle(props) {
  const {state, handleChange} = props;

  return (
    <Box component="form" m={2}>
      <TextField 
        id="new-title" 
        name="newTitle"
        label="App Title" 
        value={state.newTitle}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      {/* <TextField 
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
      /> */}
    </Box>
  )
}