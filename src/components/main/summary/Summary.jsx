import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography } from "@material-ui/core";

import { res } from "../../../constants/tempDatabase" // TEMP

// import { getNewestResponse } from "../../../api";
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
res.questions.forEach((q, idx) => {
  rows.push(createRow(q.index, q.question, q.expectedResponse, res.responses[idx]))
})

export default function Summary(props) {
  const classes = useStyles()
  const { handleResetClick, person } = props

  // Hook for response
  // const [response, setResponse] = React.useState(0);

  // React.useEffect(() => {
  //   getNewestResponse().then(res => {
  //     setResponse(res)
  //     // Check if response is nothing
  //   }).catch(e => {console.error(e)})
  // }, [])

  return (
    <Paper handleResetClick={handleResetClick} person={person}>
      <Text title="Response: " body={res.id} />
      <Text title="Submitted On: " body={res.date} />
      <Text 
        title="Submitted By: "
        body={res.person.fName + " " + res.person.lName}
      />
      <Text 
        title="Form: " 
        body={ res.form + "-" + res.morning} 
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
        color={res.passed ? "inherit" : "error"}
      >
        {res.passed ? "You passed!" : "Please try again"}
      </Typography>
    </Paper>
  )
}