import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}))

export default function Main(props) {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.main}>
      <Typography variant="body1">This is the main</Typography>
    </Container>
  )
}