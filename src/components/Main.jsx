import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(3),
  }
}))

export default function Main(props) {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.main}>
      <Container className={classes.title}>
        <Typography variant="h3" component="h1" align="center">
          Apple Blossom Preschool
        </Typography>
        <Typography variant="h5" component="h2" align="center" color="textSecondary">
          Morning Questions
        </Typography>
      </Container>

      
      <Typography variant="body1">This is the main</Typography>
    </Container>
  )
}