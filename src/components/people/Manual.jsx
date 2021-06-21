import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { CONTENT } from "../../constants/enum";
import ResetButton from "../ResetButton"

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  manual: {
    flexGrow: 1,
  },
}))

// Prompt user to type their first and last name
// Display all previous manual entry names? 
export default function Manual(props) {
    const classes = useStyles(0);
    return (
      <Paper className={classes.paper}>
        <Container className={classes.manual} onClick={() => {
          // TEMP
          props.setContent(CONTENT.QUESTIONNAIRE)
        }}>
          Manual
        </Container>
        <ResetButton setContent={props.setContent}/>
      </Paper>
    )
}