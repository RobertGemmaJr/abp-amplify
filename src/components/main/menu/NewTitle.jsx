import { TextField, Box } from "@material-ui/core";

export default function NewTitle(props) {
  const {state, setState} = props;

  // Handle change for text items
  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value })
  }

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