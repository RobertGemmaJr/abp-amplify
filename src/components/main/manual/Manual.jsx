import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { FORM } from "../../../constants/enum";
import { Content } from "../../../models"
import FlexBox from "../../FlexBox";

const useStyles = makeStyles(theme => ({
  manual: {
    // margin: theme.spacing(2, 0),
  }
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
      // Check if person already exists by first and last name

      // If exists, use it

      // Otherwise create a new person
      const person = {
        id: 0, // Need to make sure I create a unique id
        type: FORM.MANUAL,
        fName: state.fName,
        lName: state.lName,
        Responses: [],
      }
      

      setPerson(person);
      setContent(Content.QUESTIONNAIRE)
    }

    return (
      <FlexBox>
        <TextField          
          id="fName"
          name="fName"
          label="First Name"
          value={state.fName}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          noValidate required autoFocus
          className={classes.manual}
        />

        <TextField
          id="lName"
          name="lName"
          label="Last Name"
          value={state.lName}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          noValidate required
          className={classes.manual}
        />
        
        <Button 
          variant="contained"
          color="secondary"
          onClick={() => manualEntry()}
          className={classes.manual}
        >
          SUBMIT
        </Button>
      </FlexBox>
    )
}