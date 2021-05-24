import { Container, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  resetButton: {
    textAlign: "center",
    marginTop: theme.spacing(3),
  }
}))

export default function ResetButton(props) {
  const classes = useStyles();

  function handleClick() { 
    props.setContent("keypad")
  }

  return (
    <Container disableGutters className={classes.resetButton}> 
      <Button 
        variant="contained" 
        className={classes.hButton}
        onClick={() => handleClick()}
        color="secondary"
        size="large"
      >
        Reset
      </Button>
  </Container>
  )
}