import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";

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

const rows = [
  res.questions.map((q, idx) => {
    return (
      console.log(q)
    )
  })
]

export default function Summary(props) {
  const classes = useStyles()
  const { setContent, person, response } = props

  // console.log(person)

  return (
    <Paper setContent={setContent} person={person}>
      <SummaryText title="Response: " body={res.id} />
      <SummaryText title="Submitted On: " body={res.date} />
      <SummaryText 
        title="Submitted By: "
        body={res.person.fName + " " + person.lName}
      />
      <SummaryText 
        title="Form: " 
        body={
          formText(res.form) + 
          "-".concat(res.morning ? "Morning" : "Afternoon")
        } 
      />

      {/* Table */}
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Question</TableCell>
              <TableCell align="center">Expected Response</TableCell>
              <TableCell align="center">Received Response</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              // Temporary key - should be question id
              <TableRow key={row}> 

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Paper>
  )
}