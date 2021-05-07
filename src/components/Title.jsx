import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  subtitle: {
    color: "green",
  },
}))

export default function Title(props) {
  const classes = useStyles();
  
  return (
    <Container>
      <Typography variant="h3" component="h1" align="center">
        Apple Blossom Preschool
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