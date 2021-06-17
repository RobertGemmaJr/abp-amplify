import { Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  question: {

  },
  text: {
    margin: theme.spacing(3),
    fontSize: 30,
    fontWeight: "bold",
    alignContent: "center",
  },
  answer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",

    '& > *': {
      margin: theme.spacing(2, 5),
    },
  },
}))

export default function Question(props) {
  const classes = useStyles();
  const { q } = props;

  function handleYesClick() {

  }
  function handleNoClick() {

  }

  return (
    <Box alignContent="center" justifyContent="center" className={classes.question}>
      <Typography align="center" className={classes.text}>
        {q.id + ") " + q.question}
      </Typography> 
      <Box className={classes.answer}>  
        <Button
          variant="contained" 
          color="primary"
          size="large"
          onClick={() => handleYesClick()}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          color="primary" 
          size="large"
          onClick={() => handleNoClick()}
        >
          No
        </Button>
      </Box>
    </Box>
  )
}