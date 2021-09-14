import React from "react";
import { readString } from "react-papaparse";
import { Box, Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { Ptype } from "../../../models";

const personKeys = ["id", "fName", "lName"];
const questionKeys = [
  "index",
  "type",
  "question",
  "expectedResponse",
  "checkboxes",
];

export default function Imports(props) {
  const [uploadedFile, setUploadedFile] = React.useState(null);
  const { setState } = props;

  const reader = React.useMemo(() => new FileReader(), []);

  reader.onload = async (e) => {
    const text = e.target.result;
    const results = readString(text, { header: true });
    let importError = null;

    if (results.errors.length > 0) importError = results.errors[0];
    if (results?.data?.length > 0) {
      const keysToTest =
        uploadedFile.type === "Question" ? questionKeys : personKeys;
      Object.keys(results.data[0]).forEach((key) => {
        if (keysToTest.findIndex((k) => k === key) === -1)
          importError = `Incorrect headers in CSV file. Expected ${keysToTest.join(
            ", "
          )}`;
      });
    }

    setState((st) => ({ ...st, importError }));

    if (uploadedFile.type === Ptype.FAMILY && !importError)
      setState((st) => ({ ...st, newFamily: results.data }));
    else if (uploadedFile.type === Ptype.STAFF && !importError)
      setState((st) => ({ ...st, newStaff: results.data }));
    else if (uploadedFile.type === "Question" && !importError)
      setState((st) => ({ ...st, newQuestions: results.data }));
  };

  React.useEffect(() => {
    if (uploadedFile && uploadedFile.file) {
      reader.readAsText(uploadedFile.file);
      console.log("Reading file: ", uploadedFile);
      setUploadedFile((f) => ({ ...f, file: null }));
    }
  }, [uploadedFile, setState, reader]);

  return (
    <Box display="flex" justifyContent="space-evenly" m={2}>
      {/* Import Family List */}
      <Button
        startIcon={<CloudUploadIcon />}
        variant="contained"
        color="secondary"
        component="label"
      >
        Import Family List
        <input
          hidden
          id="import-family-list"
          single="true"
          type="file"
          accept=".csv, .xlsx, .xls"
          onChange={(e) =>
            setUploadedFile({ file: e.target.files[0], type: Ptype.FAMILY })
          }
          onClick={(event) => {
            event.target.value = null;
          }}
        />
      </Button>

      {/* Import Staff List */}
      <Button
        startIcon={<CloudUploadIcon />}
        variant="contained"
        color="secondary"
        component="label"
      >
        Import Staff List
        <input
          id="import-staff-list"
          single="true"
          type="file"
          accept=".csv, .xlsx, .xls"
          hidden
          onChange={(e) =>
            setUploadedFile({
              file: e.target.files[0],
              type: Ptype.STAFF,
            })
          }
          onClick={(event) => {
            event.target.value = null;
          }}
        />
      </Button>

      {/* Import Questions */}
      <Button
        startIcon={<CloudUploadIcon />}
        variant="contained"
        color="secondary"
        component="label"
      >
        Import Questions
        <input
          id="import-questions"
          single="true"
          type="file"
          accept=".csv, .xlsx, .xls"
          hidden
          onChange={(e) =>
            setUploadedFile({
              file: e.target.files[0],
              type: "Question",
            })
          }
          onClick={(event) => {
            event.target.value = null;
          }}
        />
      </Button>
    </Box>
  );
}
