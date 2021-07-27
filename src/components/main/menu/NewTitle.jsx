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
        noValidate fullWidth
      />
    </Box>
  )
}