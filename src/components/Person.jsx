import { Button, Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  person: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    "& *": {
      padding: theme.spacing(0),
    }
  },
  name: {
    marginBottom: theme.spacing(3),
  }
}))

export default function People(props) {
  const classes = useStyles();

  const name = "Robert Gemma, Jr."
  const id = 12345
  return (
    <Button className={classes.person}>
      <Container>
        <Typography 
          align="center" 
          variant="h7" 
          component="h3"
          className={classes.name}
        >
          {name}
        </Typography>
        <Typography
          variant="body1" 
          component="p" 
        >
          ID: {id}
        </Typography>
        <Typography
          variant="body1" 
          component="p" 
        >
          ID: {id}
        </Typography>
        <Typography
          variant="body1" 
          component="p" 
        >
          ID: {id}
        </Typography>
      </Container>
    </Button>
  )
}