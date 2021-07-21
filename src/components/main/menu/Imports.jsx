import React from "react";
import { Box, Button, } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { Ptype } from "../../../models";

export default function Imports(props) {

  // Handle import family button clicked
  function handleImportPeopleClick(type) {
    console.log("clicked", type)

  }
  // Handle import questions button clicked
  function handleImportQuestionsClick() {

  }

  return (
    <Box display="flex" justifyContent="space-evenly" m={2}>
      {/* Import Family List */}
      <Button
        startIcon={<CloudUploadIcon />}
        variant="contained"
        color="secondary"
        component="label"
        onClick={() => handleImportPeopleClick(Ptype.FAMILY)}
      >
        Import Family List
        <input
          hidden
          id="import-family-list"
          single="true"
          type="file"
          accept=".csv, .xlsx, .xls"
        />
      </Button>

      {/* Import Staff List */}
      <Button
        startIcon={<CloudUploadIcon />}
        variant="contained"
        color="secondary"
        component="label"
        onClick={() => handleImportPeopleClick(Ptype.STAFF)}
      >
        Import Staff List
        <input
          id="import-staff-list"
          single="true"
          type="file"
          accept=".csv, .xlsx, .xls"
          hidden
        />
      </Button>

      {/* Import Questions */}
      <Button 
        startIcon={<CloudUploadIcon />}
        variant="contained"
        color="secondary"
        component="label"
        onClick={() => handleImportQuestionsClick()}
      >
        Import Questions
        <input
          id="import-questions"
          single="true"
          type="file"
          accept=".csv, .xlsx, .xls"
          hidden
        />
      </Button>
    </Box>
  )
} 