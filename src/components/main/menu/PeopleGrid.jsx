import React from "react";
import { makeStyles } from "@material-ui/styles"
import { Box, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { Ptype } from "../../../models";
import { getSubmissionsByPerson } from "../../../api"

const useStyles = makeStyles(theme => ({
  box: {
    margin: theme.spacing(3),
  },
  dataGrid: {
    marginTop: theme.spacing(1),
  },
}))

const columns = [
  {
    field: "id", headerName: "Database ID", type: "number", 
    headerAlign: 'center', hide: true, flex: 0.5,
  },
  {
    field: "type", headerName: "Type", type: "singleSelect", 
    valueOptions: [Ptype.FAMILY, Ptype.STAFF, Ptype.MANUAL],
    headerAlign: 'center', editable: true, flex: 0.75,
  },
  {
    field: "companyId", headerName: "ID", type: "number", 
    headerAlign: 'center', editable: true, flex: 0.5,
  },
  {
    field: "firstName", headerName: "First Name", type: "string", 
    headerAlign: 'center', editable: true, flex: 1,
  },
  {
    field: "lastName", headerName: "Last Name", type: "string", 
    headerAlign: 'center', editable: true, flex: 1,
  },
  {
    field: "submissions", headerName: "Submissions", type: "number", 
    headerAlign: 'center', editable: true, flex: 0.75,
  },
]

async function getRows(people) {
  const rows = Array(people.length)

  await Promise.all(people.map(async (p, idx) => {
    const submissions = await getSubmissionsByPerson(p.id)
    rows[idx] = {
      id: p.id,
      type: p.type,
      companyId: p.companyID,
      firstName: p.fName,
      lastName: p.lName,
      submissions: submissions.length,
    }
  }))
  return rows;
}

export default function PeopleGrid(props) {
	const classes = useStyles();

  const [rows, setRows] = React.useState([])
  React.useEffect(() => {
    getRows(props.allPeople).then(res => {
      setRows(res)
    }).catch(e => {console.error(e)})
  }, [props.allPeople]);

  return (
		<Box className={classes.box}>
			<Typography color="primary" align="center" variant="h4">People</Typography>
      <DataGrid
				className={classes.dataGrid}
        columns={columns}
        rows={rows}
        density="compact"
        rowHeight={30}
        autoHeight
        pageSize={10}
        loading={!rows.length}
      />
		</Box>
  )
}