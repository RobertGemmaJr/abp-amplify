import { Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  text: {
    minHeight: "50%",
    margin: theme.spacing(3),
    fontSize: 30,
    fontWeight: "bold",
    alignContent: "center",
  },
  button: {
    margin: theme.spacing(2, 5),
  },
}))

export default function Question(props) {
  const classes = useStyles();
  const { q, handleClick } = props;

  return (
    <Box alignContent="center" justifyContent="center" width={1} height={1}>
      <Typography align="center" className={classes.text}>
        {q.index + ") " + q.question}
      </Typography> 
      <Box display="flex" justifyContent="center">  
        <Button
          variant="contained" 
          color="primary"
          size="large"
          onClick={() => handleClick("Yes")}
          className={classes.button}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          color="primary" 
          size="large"
          onClick={() => handleClick("No")}
          className={classes.button}
        >
          No
        </Button>
      </Box>
    </Box>
  )
}