import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  subtitle: {
    color: theme.palette.secondary.dark,
  },
}))

export default function Title(props) {
  const classes = useStyles();
  
  const title = "Apple Blossom Preschool"
  return (
    <Container>
      <Typography variant="h3" component="h1" align="center">
        {title}
      </Typography>
      <Typography 
        variant="h5" 
        component="h2" 
        align="center" 
        className={classes.subtitle}
      >
        {props.subtitle}
      </Typography>
    </Container>
  )
}