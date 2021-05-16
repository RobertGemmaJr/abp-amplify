import React from "react"
import { Paper, TextField, Box, Button } from "@material-ui/core"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from "@material-ui/styles";

// Returns date as a "yyyy-mm-dd" format
function getDate() {
  const today = new Date()
  return (
    today.getFullYear() + "-" + 
    String(today.getMonth()+1).padStart(2, "0") + "-" + 
    String(today.getDate()).padStart(2, "0")
  );
}

const useStyles = makeStyles(theme => ({
  menu: {
    width: "75%",
  },
  hideInput: {
    display: "none"
  },
  save: {
    marginTop: theme.spacing(3)
  }
}))

export default function Menu(props) {
  const classes = useStyles();

  // Hook for new title
  const [newTitle, setNewTitle] = React.useState("Apple Blossom Preschool")
  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  // Handle import child button clicked
  function handleImportChildClick() {

  }

  // Handle import staff button clicked
  function handleImportStaffClick() {

  }

  function handleExportClick() {
    
  }

  // Handle save button clicked
  function handleSaveClick() {
    // Save newTitle to actual title
    window.location.reload();
  }

  return (
    <Paper className={classes.menu}>
    
    <Box m={2} display="flex" justifyContent="space-evenly">
      {/* Import Child List */}
      <input
        className={classes.hideInput}
        id="import-child-list"
        single
        type="file"
        accept=".csv, .xlsx, .xls"
      />
      <label htmlFor="import-child-list">
        <Button 
          startIcon={<CloudUploadIcon />}
          variant="contained"
          color="secondary"
          component="span"
          onClick={() => handleImportChildClick()}
        >
          Import Child List
        </Button>
      </label>

      {/* Import Staff List */}
      <input
        className={classes.hideInput}
        id="import-staff-list"
        single
        type="file"
        accept=".csv, .xlsx, .xls"
      />
      <label htmlFor="import-staff-list">
        <Button 
          startIcon={<CloudUploadIcon />}
          variant="contained"
          color="secondary"
          component="span"
          onClick={() => handleImportStaffClick()}
        >
          Import Staff List
        </Button>
      </label>
    </Box>

      {/* Export Answers */}
      <Box m={2} display="flex" justifyContent="space-evenly">
        <TextField
          id="start-date"
          label="Start Date" 
          type="date"
          defaultValue="2020-01-01"
        />

        <TextField
          id="end-date"
          label="End Date" 
          type="date"
          defaultValue={getDate()}
        />

        <Button 
          variant="contained"
          color="secondary"
          onClick={() => handleExportClick()}
        >
          Export Answers
        </Button>
      </Box>

      {/* Update Title */}
      <Box m={3} component="form">
        <TextField 
          id="new-title" 
          label="Update Title" 
          value={newTitle}
          onChange={handleNewTitleChange}
          variant="outlined"
          noValidate fullWidth
        />
      </Box>

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