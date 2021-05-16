import React from "react"
import { Paper, Typography, Container, TextField, Box, Button, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  menu: {
    width: "75%",
  },
  save: {
    marginTop: theme.spacing(3)
  }
}))

// Temporary spacing for scroll
const temp = []
for(var i = 0; i < 50; i++) {
  temp.push(
    <Box>
      <Typography align="center">Test</Typography>
    </Box>
  )
}

export default function Menu(props) {
  const classes = useStyles();

  // Hook for new title
  const [newTitle, setNewTitle] = React.useState("Apple Blossom Preschool")
  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  // Handles save button clicked
  function handleSaveClick() {
    // Save newTitle to actual title
    window.location.reload();
  }

  return (
    <Paper className={classes.menu}>
      {/* Import/Export Buttons */}

      {/* Update Title */}
      <Box m={2}>
        <TextField 
          id="newTitle" 
          label="Update Title" 
          value={newTitle}
          onChange={handleNewTitleChange}
          variant="outlined"
          noValidate fullWidth
        />
      </Box>


      {temp}

      {/* Save Button */}
      <Box m={2} align="center" className={classes.save}>
        <Button 
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => handleSaveClick()}
        >
          Save
        </Button>
      </Box>

    </Paper>
  )
}