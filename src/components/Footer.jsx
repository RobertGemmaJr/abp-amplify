import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[500],
  },
}))

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant="body1">This is the footer</Typography>
      </Container>
    </footer>
  )
}