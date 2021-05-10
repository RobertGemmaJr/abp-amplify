import { Button, Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  person: {
    width: "100%",
    height: 150,

    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  name: {
    marginBottom: theme.spacing(3),
  },
}))

function Info(text) {
  return (
    <Typography 
      style={{textTransform: "none"}} 
      align="left" 
      variant="body2" 
      component="p"
    >
      {text}
    </Typography>
  )
}


export default function People(props) {
  const classes = useStyles();


  const name = "Robert M. Gemma"
  const id = 12345
  const guardian1 = "Foo Bar"
  const guardian2 = "Foo Bar"
  return (
    <Button className={classes.person}>
      <Container disableGutters>
        <Typography 
          align="center" 
          variant="" 
          component="h3"
          className={classes.name}
        >
          {name}
        </Typography>
        {Info("ID: " + id)}
        {Info("Guardian 1: " + guardian1)}
        {Info("Guardian 2: " + guardian2)}
      </Container>
    </Button>
  )
}