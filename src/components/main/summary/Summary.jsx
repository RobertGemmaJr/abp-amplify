import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography } from "@material-ui/core";

import { res } from "../../../constants/tempDatabase" // TEMP

import { Ptype } from "../../../models";
import Paper from "../../Paper";
import SummaryText from "./SummaryText";

const useStyles = makeStyles(theme => ({
  table: {
    margin: theme.spacing(1, 0)
  },
}))

// Renders the form's text
function formText(form) {
  switch(form) {
    case Ptype.NONE: return ""
    case Ptype.FAMILY: return "Family"
    case Ptype.STAFF: return "Staff"
    case Ptype.MANUAL: return "Manual"
    default:
      console.error("Invalid form code:", form)
      break;
  }
}

function createRow(id, question, expectedResponse, receivedResponse) {
  return {id, question, expectedResponse, receivedResponse }
}

// API call for response?
const rows = []
res.questions.forEach((q, idx) => {
  rows.push(createRow(q.id, q.question, q.expectedResponse, res.responses[idx]))
})

export default function Summary(props) {
  const classes = useStyles()
  const { handleResetClick, person } = props

  return (
    <Paper handleResetClick={handleResetClick} person={person}>
      <SummaryText title="Response: " body={res.id} />
      <SummaryText title="Submitted On: " body={res.date} />
      <SummaryText 
        title="Submitted By: "
        body={res.person.fName + " " + res.person.lName}
      />
      <SummaryText 
        title="Form: " 
        body={
          formText(res.form) + 
          "-".concat(res.morning ? "Morning" : "Afternoon")
        } 
      />

      {/* Table */}
      <TableContainer>
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
            {rows.map(row => {
              return (
                <TableRow key={row.id}> 
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">{row.question}</TableCell>
                  <TableCell align="left">{row.expectedResponse}</TableCell>
                  <TableCell align="left">{row.receivedResponse}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Passed? */}
      <Typography 
        variant="subtitle1" 
        color={res.passed ? "inherit" : "error"}
      >
        {res.passed ? "You passed!" : "Please try again"}
      </Typography>
    </Paper>
  )
}