import { FormGroup, FormControlLabel, Card, TextField, Box, Checkbox } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

export default function MenuQCard(props) {
  // Change return if T/F question or text response
  return (
    <Card m={1}>
      <Box 
        p={2}
        display="flex" 
        justifyContent="space-evenly" 
        alignItems="center"
      >
        {/* Button Group
          Up and down arrows that move the cards up/down the order
        */}
        <TextField 
          id="question" 
          name="question"
          label="Question" 
          value="This is My Question"
          // onChange={}
          variant="outlined"
          noValidate fullWidth
        />

        {/* Expected Answer */}

        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox 
                color="secondary" 
                name="morningCheck"
                // checked={}
                // onChange={} 
              />
            }
            label="Morning"
            labelPlacement="bottom"
          />
        </FormGroup>

        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox 
                color="secondary" 
                name="afternoonCheck"
                // checked={}
                // onChange={} 
              />
            }
            label="Afternoon"
            labelPlacement="bottom"
          />
        </FormGroup>
        <DeleteIcon color="secondary" />
      </Box>
  </Card>
  )
}