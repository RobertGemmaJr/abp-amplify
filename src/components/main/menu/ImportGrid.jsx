import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { Ptype, Qtype } from "../../../models";

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(3),
  },
  dataGrid: {
    marginTop: theme.spacing(1),
  },
}));

const personColumns = [
  {
    field: "id",
    headerName: "ID",
    type: "string",
    headerAlign: "left",
    flex: 0.5,
  },
  {
    field: "fName",
    headerName: "First Name",
    type: "string",
    headerAlign: "left",
    flex: 1,
  },
  {
    field: "lName",
    headerName: "Last Name",
    type: "string",
    headerAlign: "left",
    flex: 1,
  },
];

const questionColumns = [
  {
    field: "index",
    headerName: "Index",
    type: "number",
    headerAlign: "center",
    flex: 0.25,
  },
  {
    field: "type",
    headerName: "Type",
    type: "singleSelect",
    valueOptions: [Qtype.BOOLEAN, Qtype.TEXT, Qtype.TEMP, Qtype.TEMP_CHECKBOX],
    headerAlign: "center",
    flex: 0.5,
  },
  {
    field: "question",
    headerName: "Question",
    type: "string",
    headerAlign: "center",
    flex: 2,
  },
  {
    field: "expectedResponse",
    headerName: "Answer",
    type: "string",
    headerAlign: "center",
    flex: 0.5,
  },

  {
    field: "familyMorning",
    headerName: "FAMILY-MORNING",
    type: "boolean",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "familyAfternoon",
    headerName: "FAMILY-AFTERNOON",
    type: "boolean",
    headerAlign: "center",
    flex: 0.25,
  },
  {
    field: "staffMorning",
    headerName: "STAFF-MORNING",
    type: "boolean",
    headerAlign: "center",
    flex: 0.25,
  },
  {
    field: "staffAfternoon",
    headerName: "STAFF-AFTERNOON",
    type: "boolean",
    flex: 0.25,
  },
  {
    field: "manualMorning",
    headerName: "MANUAL-MORNING",
    type: "boolean",
    headerAlign: "center",
    flex: 0.25,
  },
  {
    field: "manualAfternoon",
    headerName: "MANUAL-AFTERNOON",
    type: "boolean",
    headerAlign: "center",
    flex: 0.25,
  },
];

export default function ImportGrid(props) {
  const classes = useStyles();
  const { data, type } = props;
  const [newData, setNewData] = React.useState(null);

  React.useEffect(() => {
    if (type === Ptype.STAFF || type === Ptype.FAMILY) {
      setNewData(data);
    } else {
      let rows = data.map((q) => {
        let chk = q.checkboxes.split(",").map(Number).map(Boolean);
        return {
          index: Number(q.index),
          type: q.type,
          question: q.question,
          expectedResponse: q.expectedResponse,

          familyMorning: chk[0],
          familyAfternoon: chk[1],
          staffMorning: chk[2],
          staffAfternoon: chk[3],
          manualMorning: chk[4],
          manualAfternoon: chk[5],
        };
      });
      console.log("NEW ROWS: ", rows);
      setNewData(rows);
    }
  }, [data]);

  return (
    <Box className={classes.box}>
      <Typography color="primary" align="center" variant="h4">
        {type[0] + type.slice(1, type.length).toLowerCase()} Import Data
      </Typography>

      {newData && (
        <DataGrid
          className={classes.dataGrid}
          columns={type === "QUESTIONS" ? questionColumns : personColumns}
          rows={newData}
          density="compact"
          rowHeight={30}
          autoHeight
          pageSize={20}
          loading={!data.length}
          // sortModel={[{ field: "personID", sort: "asc" }]}
          getRowId={(row) => (row.id ? row.id : row.index)}
        />
      )}
    </Box>
  );
}
