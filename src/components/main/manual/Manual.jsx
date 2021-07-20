import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Content, Ptype } from "../../../models"
import FlexBox from "../../FlexBox";
import { createPerson } from "../../../api";

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

    function handleClick() {
      const person = {
        type: Ptype.MANUAL,
        fName: state.fName,
        lName: state.lName,
      }
      createPerson(person).then(res => {
        setPerson(res);
        setContent(Content.QUESTIONNAIRE)
      }).catch(e => {console.error(e)})
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
          onClick={() => handleClick()}
          className={classes.manual}
        >
          SUBMIT
        </Button>
      </FlexBox>
    )
}