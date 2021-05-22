import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  subtitle: {
    color: theme.palette.secondary.dark,
    fontWeight: "bold",
  },
}))

export default function Title(props) {
  const classes = useStyles();
  const {content, qType} = props
  
  // Get title and subtitle
  const title = "Apple Blossom Preschool" // TEMP
  let subtitle = ""
  if (content === "home") subtitle = "Home"
  else if (content === "menu") subtitle = "Menu"
  else if (content === "summary") subtitle = "Summary"
  else {
    subtitle = qType ? "Morning Questions" : "Afternoon Questions"
  }

  return (
    <Container>
      {/* Title */}
      <Typography variant="h3" component="h1" align="center">
        {title}
      </Typography>

      {/* Subtitle */}
      <Typography 
        variant="h5" 
        component="h2" 
        align="center" 
        className={classes.subtitle}
      >
        {subtitle}
      </Typography>
    </Container>
  )
}