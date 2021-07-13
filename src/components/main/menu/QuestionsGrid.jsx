import { makeStyles } from "@material-ui/styles"
import { Box, Typography, Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles(theme => ({
  box: {
    margin: theme.spacing(3),
  },
  dataGrid: {
    marginTop: theme.spacing(1),
  },
}))

const columns = [
  {field: "id", headerName: "Database ID", type: "number", hide: true, flex: 0.5,},
	{field: "index", headerName: "Index", type: "number", flex: 0.5,},
  {field: "type", headerName: "Type", type: "string", flex: 0.5,},
	{field: "question", headerName: "Question", type: "string", flex: 2,},
  {field: "expectedResponse", headerName: "Answer", type: "string", flex: 0.5,},	

  {field: "familyMorning", headerName: "FAMILY-MORNING", type: "boolean", flex: 0.25,},
  {field: "familyAfternoon", headerName: "FAMILY-AFTERNOON", type: "boolean", flex: 0.25,},
  {field: "staffMorning", headerName: "STAFF-MORNING", type: "boolean", flex: 0.25,},
  {field: "staffAfternoon", headerName: "STAFF-AFTERNOON", type: "boolean", flex: 0.25,},
  {field: "manualMorning", headerName: "MANUAL-MORNING", type: "boolean", flex: 0.25,},
  {field: "manualAfternoon", headerName: "MANUAL-AFTERNOON", type: "boolean", flex: 0.25,},
]

function getRows(questions) {
  const rows = []
  questions.forEach(q => {
    rows.push({
      id: q.id,
			index: q.index,
      type: q.type,
      question: q.question,
      expectedResponse: q.expectedResponse,

      familyMorning: q.checkboxes[0],
      familyAfternoon: q.checkboxes[1],
      staffMorning: q.checkboxes[2],
      staffAfternoon: q.checkboxes[3],
      manualMorning: q.checkboxes[4],
      manualAfternoon: q.checkboxes[5],
    })
  })
  return rows
}

export default function QuestionsGrid(props) {
	const classes = useStyles();

  const {state, setState, questions} = props

  // Handle randomized change
  const handleRandomizedChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked})
  }

  return (
		<Box className={classes.box}>
			<Typography align="center" variant="h4">Questions</Typography>
      
      {/* Randomize Questions */}
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox 
              color="secondary" 
              name="randomized"
              checked={state.randomized}
              onChange={handleRandomizedChange} 
            />
          }
          label="Randomize Questions?"
          labelPlacement="start"
        />
      </FormGroup>

      <DataGrid
				className={classes.dataGrid}
        columns={columns}
        rows={getRows(questions)}
        density="compact"
        autoHeight
        pageSize={20}
				sortModel={[ {field: "index", sort: "asc"} ]}        
      />
		</Box>
  )
}