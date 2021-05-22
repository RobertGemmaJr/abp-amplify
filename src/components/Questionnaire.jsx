import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  questionnaire: {
    width: "100%",
  },
}))

// Questions should be displayed on at a time
// Questions given through Azure chatbot?
export default function Questionnaire(props) {
    const classes = useStyles(0);
    return (
      <Paper className={classes.questionnaire}>
      </Paper>
    )
}