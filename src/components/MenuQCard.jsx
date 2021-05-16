import { Card, TextField, Box, Checkbox } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

export default function MenuQCard(props) {
  return (
    <Card m={1}>
      <Box 
        p={2}
        display="flex" 
        justifyContent="space-evenly" 
        alignItems="center"
      >
        <TextField 
          variant="outlined"
        />
        <Checkbox color="secondary" />
        <Checkbox color="secondary" />
        <DeleteIcon color="secondary" />
      </Box>
  </Card>
  )
}