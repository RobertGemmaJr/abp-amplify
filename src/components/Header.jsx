import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    header: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[500],
    },
}))

export default function Header(props) {
    const classes = useStyles();
    return (
      <header className={classes.header}>
        <Container>
          <Typography component="h4" variant="h4">Apple Blossom Health Check</Typography>
        </Container>
      </header>
    )
}