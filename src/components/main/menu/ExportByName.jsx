import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Box, Button } from "@material-ui/core";
import { getSubmissionsByPerson } from "../../../api";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0, 1),
  },
}));

export default function ExportByName(props) {
  const classes = useStyles();
  const { state, setState, allPeople } = props;

  // Handle change for text items
  const handleTextChange = (event) => {
    console.log("Change: ", event.target.name);
    setState({ ...state, [event.target.name]: event.target.value });
  };

  async function getSubmissions(people) {
    const rows = [];

    await Promise.all(
      people.map(async (p, idx) => {
        const submissions = await getSubmissionsByPerson(p.id);
        console.log("PERSON: ", p);
        console.log("SUBMISSIONs: ", submissions);
        // rows[idx] = submissions;

        submissions.forEach((sub) => {
          rows.push({
            date: sub.createdAt,
            firstName: p.fName,
            lastName: p.lName,
            questions: sub.questions,
            responses: sub.responses,
            passed: sub.passed === true ? "true" : sub.passed === false ? "false" : "",
          });
        });
      })
    );
    console.log("Rows: ", rows)
    return rows;
  }

  // Handle click for the export button
  async function handleClick() {
    let matchedSubmissions = [];
    if (state.exportName?.length > 0) {
      const matchedPeople = allPeople.filter((ppl) =>
        `${ppl.fName} ${ppl.lName}`
          ?.toLowerCase()
          .includes(state.exportName?.toLowerCase())
      );
      console.log("Matched people: ", matchedPeople);
      matchedSubmissions = await getSubmissions(matchedPeople);
    }
    console.log("Matched submissions: ", matchedSubmissions);
    setState({
      ...state,
      exportMatchedSubmissions: matchedSubmissions,
      exportModalOpen: true,
    });
  }

  return (
    <Box display="flex" justifyContent="center" m={2}>
      <TextField
        id="export-name"
        name="exportName"
        label="Name"
        value={state.exportName}
        onChange={handleTextChange}
        variant="outlined"
        noValidate
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
