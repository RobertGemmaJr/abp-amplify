import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { DataGrid, } from "@material-ui/data-grid";

import { getQuestion } from "../../../api";
import Paper from "../../Paper";
import Text from "./Text";

const useStyles = makeStyles(theme => ({
  table: {
    width: "100%",
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
  if(hh >= 12) hh = hh-12; m="PM"
  if(hh === 0 ) hh = 12
  min = min < 10 ? "0"+min : min;

  return month + "/" + day + "/" + year + " " + hh + ":" + min + " " + m
}


// DataGrid columns
const columns = [
  {field: "id",  headerName: "Index", type: "number"},
  {field: "question", headerName: "Question", type: "string", sortable: false, flex: 1},
  {field: "expectedResponse", headerName: "Expected",type: "string",  sortable: false},
  {field: "response", headerName: "Actual", type: "string", sortable: false},
  {field: "correct", headerName: "Passed?",  sortable: false, type: "string",
    // Make this a check or x?
    valueGetter: (params) => 
      `${params.getValue(params.id, "expectedResponse") === params.getValue(params.id, "response")
        ? "Passed" : "Failed"}`
  }
]

// Get DataGrid rows
async function getRows(submission) {
  const rows = Array(submission.questions.length)

  await Promise.all(submission.questions.map(async (qId, idx) => {
    const q = await getQuestion(qId)
    rows[idx] = {
      id: q.index,
      question: q.question,
      expectedResponse: q.expectedResponse,
      response: submission.responses[idx]
    }
  }))
  return rows;
}

export default function Summary(props) {
  const classes = useStyles()
  const { handleResetClick, person, submission } = props

  const [rows, setRows] = React.useState([])

  
  React.useEffect(() => {
    // Get rows for the DataGrid when submission is complete
    if(submission) {
      getRows(submission).then(res => {
        setRows(res)
      }).catch(e => {console.error(e)})
    }
  }, [submission]);
  
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

      <DataGrid
        columns={columns}
        rows={rows}
        loading={!rows.length}
        density="compact"
        autoHeight autoPageSize
        disableSelectionOnClick disableColumnMenu
        className={classes.table}
      />

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