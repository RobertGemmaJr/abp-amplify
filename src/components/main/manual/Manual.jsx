import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import FlexBox from "../../FlexBox";

import { CONTENT, FORM } from "../../../constants/enum";

const useStyles = makeStyles(theme => ({
  manual: {
    
  },
}))

export default function Manual(props) {
    const classes = useStyles();

    const { setContent, setPerson } = props;

    const [state, setState] = React.useState({
      fName: "",
      lName: "",
    });

    const handleChange = (event) => {
      setState({...state, [event.target.name]: event.target.value })
    }

    function manualEntry() {
      const person = {
        id: 0, // Need to make sure I create a unique id
        type: FORM.MANUAL,
        fName: state.fName,
        lName: state.lName,
        Responses: [],
      }

      // API call to create Person
      setPerson(person);
      setContent(CONTENT.QUESTIONNAIRE)
    }

    return (
      <FlexBox className={classes.manual}>
        <TextField
          id="fName"
          name="fName"
          label="First Name"
          value={state.fName}
          onChange={handleChange}
          variant="outlined"
          noValidate
        />

        <TextField
          id="lName"
          name="lName"
          label="Last Name"
          value={state.lName}
          onChange={handleChange}
          variant="outlined"
          noValidate
        />
        
        <Button 
          variant="contained"
          color="secondary"
          onClick={() => manualEntry()}
        >
          SUBMIT
        </Button>
      </FlexBox>
    )
}