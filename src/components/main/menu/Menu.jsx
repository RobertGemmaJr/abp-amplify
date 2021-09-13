import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { makeStyles } from "@material-ui/styles";
import { Paper, Box, Button, Typography } from "@material-ui/core";
import { toast } from "react-toastify";

import PeopleGrid from "./PeopleGrid";
import QuestionsGrid from "./QuestionsGrid";
import Imports from "./Imports";
import ExportByDate from "./ExportByDate";
import NewTitle from "./NewTitle";
import ExportByName from "./ExportByName";
import Temperature from "./Temperature";
import { replacePeople, updateSettings } from "../../../api";
import SubmissionsExportDialog from "./SubmissionsExportDialog";
import ImportGrid from "./ImportGrid";
import { Ptype } from "../../../models";

const useStyles = makeStyles((theme) => ({
  menu: {
    width: "100%",
    padding: theme.spacing(2),

    "& >*": {
      margin: theme.spacing(5, 0),
    },
  },
  save: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  },
}));

// Returns date as a "yyyy-mm-dd" format
function getDate() {
  const today = new Date();
  return (
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0")
  );
}

export default function Menu(props) {
  const classes = useStyles();
  const { settings, allPeople, allQuestions } = props;

  // Hook for menu state
  const [state, setState] = React.useState({
    // User settings
    newTitle: settings.title,
    newRandomizeQuestions: settings.randomizeQuestions,
    newRecordTemperature: settings.recordTemperature,
    newKeepTemperature: settings.keepTemperature,
    newTempTolerance: settings.tempTolerance,

    // Export questions
    startDate: "2020-01-01",
    endDate: getDate(),
    exportName: "",
    exportMatchedSubmissions: [],
    exportModalOpen: false,

    // Import data
    newFamily: null,
    newStaff: null,
    newQuestions: null,
    importError: null,
  });

  React.useEffect(() => {
    console.error("Import error: ", state.importError)
    if (state.importError) {
      toast.error(state.importError.message ? "Unable to process CSV file." : state.importError, {
        position: toast.POSITION.TOP_CENTER,
      });
      setState((st) => ({ ...st, importError: null }));
    }
  }, [state.importError]);

  // Handle change for text items
  const handleTextChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // Handle change for checkbox items
  const handleCheckboxChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // Handle save button clicked
  async function handleSaveClick() {
    // Update settings
    const newSettings = {
      title: state.newTitle,
      randomizeQuestions: state.newRandomizeQuestions,
      recordTemperature: state.newRecordTemperature,
      keepTemperature: state.newKeepTemperature,
      tempTolerance: state.newTempTolerance,
    };
    await updateSettings(settings, newSettings);

    // Update people in database and set hook
    if (state.newFamily) {
      console.log("Family imported", state.newFamily);
      await replacePeople(state.newFamily, Ptype.FAMILY);
    } else if (state.newStaff) {
      console.log("Staff imported", state.newStaff);
      await replacePeople(state.newStaff, Ptype.STAFF);
    }

    // Update questions in database and set hook
    if (state.newQuestions) {
      console.log("Questions imported");
    }

    // API call to add/remove questions
    // API call to add/remove people

    // Reload will sync DataStore
    window.location.reload();
  }

  return (
    <Paper className={classes.menu}>
      {/* IMPORT BUTTONS */}
      {/* Move each button to the correct section */}
      <Imports state={state} setState={setState} />

      {/* IMPORT TABLE FOR FAMILY */}
      {state?.newFamily?.length > 0 && (
        <ImportGrid
          data={state.newFamily}
          type={"FAMILY"}
          state={state}
          setState={setState}
        />
      )}
      {/* IMPORT TABLE FOR STAFF */}
      {state?.newStaff?.length > 0 && (
        <ImportGrid
          data={state.newStaff}
          type={"STAFF"}
          state={state}
          setState={setState}
        />
      )}

      {/* Update Title */}
      <NewTitle state={state} handleChange={handleTextChange} />

      {/* Temperature Settings */}
      <Temperature
        state={state}
        setState={setState}
        handleCheckboxChange={handleCheckboxChange}
        handleTextChange={handleTextChange}
      />

      {/* Export buttons */}
      <Typography align="center" color="primary" variant="h4" gutterBottom>
        Export Submissions
      </Typography>
      <ExportByDate state={state} setState={setState} allPeople={allPeople} />
      <ExportByName state={state} setState={setState} allPeople={allPeople} />
      <SubmissionsExportDialog state={state} setState={setState} />

      {/* QUESTIONS */}
      <QuestionsGrid
        allQuestions={allQuestions}
        state={state}
        setState={setState}
      />

      {/* PEOPLE */}
      <PeopleGrid allPeople={allPeople} />

      {/* Save Button */}
      <Box align="center" className={classes.save}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => handleSaveClick()}
        >
          Save
        </Button>
      </Box>
      <AmplifySignOut />
    </Paper>
  );
}
