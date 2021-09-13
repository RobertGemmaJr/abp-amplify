import React, { useState, useEffect, useMemo } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CSVLink } from "react-csv";

export default function SubmissionsExportDialog(props) {
  const { state, setState } = props;
  const keys = useMemo(
    () => ["date", "firstName", "lastName", "questions", "responses", "passed"],
    []
  );

  const [exportCSV, setExportCSV] = useState([keys]);

  const handleClose = () => {
    setState({
      ...state,
      exportModalOpen: false,
      exportMatchedSubmissions: [],
    });
  };

  const matchingSubmissionsCount = state.exportMatchedSubmissions?.length;

  useEffect(() => {
    let CSVdata = [];
    state.exportMatchedSubmissions.forEach((sub) => {
      let newSub = [];
      keys.forEach((k) => {
        newSub.push(sub[k]);
      });
      CSVdata.push(newSub);
    });
    setExportCSV((st) => [...st, ...CSVdata]);
  }, [state.exportMatchedSubmissions, keys]);

  return (
    <div>
      <Dialog
        open={state.exportModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Export</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {matchingSubmissionsCount === 0
              ? "No matching submissions."
              : `Export ${matchingSubmissionsCount} submission${
                  matchingSubmissionsCount > 1 ? "s" : ""
                }?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {matchingSubmissionsCount > 0 ? (
            <>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>

              <CSVLink
                data={exportCSV}
                filename={"export-file.csv"}
                //   className="btn btn-primary"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Button
                  onClick={handleClose}
                  color="primary"
                  variant="contained"
                  autoFocus
                >
                  Export
                </Button>
              </CSVLink>
              {/* {exportLink && <CSVDownload data={exportCSV} target="_blank" />} */}
            </>
          ) : (
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
