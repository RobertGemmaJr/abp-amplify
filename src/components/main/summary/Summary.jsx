import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography } from "@material-ui/core";

import Paper from "../../Paper";
import Text from "./Text";

const useStyles = makeStyles(theme => ({
  table: {
    margin: theme.spacing(1, 0)
  },
}))

function readableDateTime(dateTime) {
  const date = new Date(dateTime);
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  let hh = date.getHours();
  let min = date.getMinutes();
  
  // Convert to 12 hour time
  let m = "AM"
  if(hh >= 12) hh = hh-12
  if(hh === 0 ) hh = 12
  m = m < 10 ? "0"+m : m;

  return month + "/" + day + "/" + year + " " + hh + ":" + min + " " + m
}

function createRow(id, index, question, expectedResponse, receivedResponse) {
  return {id, index, question, expectedResponse, receivedResponse }
}

// API call for response?
const rows = []

export default function Summary(props) {
  const classes = useStyles()
  const { handleResetClick, person, submission } = props
  console.log(submission) // This should only log once

  React.useEffect(() => {
    rows.length = 0; // Reset
    submission.questions.forEach((qId, idx) => {
      // Get actual question from qId
      rows.push(createRow(
        qId, 
        "Index", 
        "question", 
        "expected", 
        submission.responses[idx]
      ))

    })
  }, [submission])

  return (
    <Paper handleResetClick={handleResetClick} person={person}>
      <Text title="Response: " body={submission.id} />
      <Text title="Submitted On: " body={readableDateTime(submission.createdAt)} />
      <Text 
        title="Submitted By: "
        body={person.companyID + ") " + person.fName + " " + person.lName}
      />
      <Text 
        title="Form: " 
        body={ submission.formType + "-" + submission.time} 
      />

      {/* Table */}
      <TableContainer>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Index</TableCell>
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
                    {row.index}
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
        color={submission.passed ? "inherit" : "error"}
      >
        {submission.passed ? "You passed!" : "Please try again"}
      </Typography>
    </Paper>
  )
}