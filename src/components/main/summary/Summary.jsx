import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography } from "@material-ui/core";

import { res } from "../../../constants/tempDatabase" // TEMP

import { getPerson } from "../../../api";
import Paper from "../../Paper";
import Text from "./Text";

const useStyles = makeStyles(theme => ({
  table: {
    margin: theme.spacing(1, 0)
  },
}))

function createRow(index, question, expectedResponse, receivedResponse) {
  return {index, question, expectedResponse, receivedResponse }
}

// API call for response?
const rows = []

export default function Summary(props) {
  const classes = useStyles()
  const { handleResetClick, person, submission } = props
  console.log(submission)

  React.useEffect(() => {
    // Temp - use question
    for(var i=0; i < 10; i++) {
      rows.push(createRow("Index", "question", "expected", "actual"))
    }
  }, [])

  return (
    <Paper handleResetClick={handleResetClick} person={person}>
      <Text title="Response: " body={submission.id} />
      <Text title="Submitted On: " body={submission.dateCreated} />
      <Text 
        title="Submitted By: "
        body={person.fName + " " + person.lName}
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
                <TableRow key={row.index}> 
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