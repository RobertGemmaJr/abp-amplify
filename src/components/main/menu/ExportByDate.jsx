import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Box, Button } from "@material-ui/core";
import { getSubmissionsByDate } from "../../../api";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0, 1),
  },
}));

export default function ExportByDate(props) {
  const classes = useStyles();
  const { state, setState, allPeople } = props;

  // Handle change for text items
  const handleTextChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  async function getSubmissions() {
    const matchedSubmissions = await getSubmissionsByDate(
      state.startDate,
      state.endDate
    );
    return matchedSubmissions.map((sub) => {
      const person = allPeople.find((p) => p.id === sub.personID);
      return {
        date: sub.createdAt,
        firstName: person !== undefined ? person.fName : "",
        lastName: person !== undefined ? person.lName : "",
        questions: sub.questions,
        responses: sub.responses,
        passed:
          sub.passed === true ? "true" : sub.passed === false ? "false" : "",
      };
    });
  }

  // Handle export button clicked by date
  async function handleClick() {
    const matchedSubmissions = await getSubmissions();
    
    setState({
      ...state,
      exportMatchedSubmissions: matchedSubmissions,
      exportModalOpen: true,
    });
  }

  return (
    <Box display="flex" justifyContent="center">
      <TextField
        id="start-date"
        name="startDate"
        label="Start Date"
        type="date"
        value={state.startDate}
        onChange={handleTextChange}
        className={classes.margin}
      />
      <TextField
        id="end-date"
        name="endDate"
        label="End Date"
        type="date"
        value={state.endDate}
        onChange={handleTextChange}
        className={classes.margin}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleClick()}
        className={classes.margin}
      >
        Export Submissions
      </Button>
    </Box>
  );
}
