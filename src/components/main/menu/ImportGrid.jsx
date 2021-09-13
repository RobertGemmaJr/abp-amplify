import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(3),
  },
  dataGrid: {
    marginTop: theme.spacing(1),
  },
}));

const columns = [
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

export default function ImportGrid(props) {
  const classes = useStyles();
  const { data, type } = props;

  return (
    <Box className={classes.box}>
      <Typography color="primary" align="center" variant="h4">
        {type[0] + type.slice(1, type.length).toLowerCase()} Import Data
      </Typography>

      <DataGrid
        className={classes.dataGrid}
        columns={columns}
        rows={data}
        density="compact"
        rowHeight={30}
        autoHeight
        pageSize={20}
        loading={!data.length}
        // sortModel={[{ field: "personID", sort: "asc" }]}
        getRowId={(row) => row.id}
      />
    </Box>
  );
}
