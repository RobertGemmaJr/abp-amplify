import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

import { FORM } from "../../../constants/enum" 
import Paper from "../../Paper";
import SummaryText from "./SummaryText";

import { res } from "../../../constants/tempDatabase" // TEMP

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 750,
    margin: theme.spacing(1)
  },
  bold: {
    fontWeight: "bold"
  },
  passed: {

  },
  failed: {

  }
}))

// Renders the form's text
function formText(form) {
  switch(form) {
    case FORM.NONE: return ""
    case FORM.FAMILY: return "Family"
    case FORM.STAFF: return "Staff"
    case FORM.MANUAL: return "Manual"
    default:
      console.error("Invalid form code:", form)
      break;
  }
}

const rows = []
const columns = []

export default function Summary(props) {
  const classes = useStyles()
  const { setContent, person, response } = props

  console.log(response, classes)

  return (
    <Paper setContent={setContent} person={person}>
      <SummaryText title="Response: " body={res.id} />
      <SummaryText title="Submitted On: " body={res.date} />
      <SummaryText 
        title="Submitted By: "
        body={person.fName + " " + person.lName}
      />
      <SummaryText 
        title="Form: " 
        body={
          formText(res.form) + 
          "-".concat(res.morning ? "Morning" : "Afternoon")
        } 
      />

      {/* Table */}
      <DataGrid 
        rows={rows} columns={columns} 
        className={classes.table}
      />
    </Paper>
  )
}