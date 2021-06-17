import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';

import { CONTENT } from "../constants/enum";

const useStyles = makeStyles(theme => ({
  subtitle: {
    color: theme.palette.secondary.dark,
    fontWeight: "bold",
  },
}))

export default function Title(props) {
  const classes = useStyles();
  const {content, title, morning} = props
  
  // Get Subtitle
  let subtitle = ""
  if (content === CONTENT.HOME) subtitle = "Home"
  else if (content === CONTENT.MENU) subtitle = "Menu"
  else if (content === CONTENT.SUMMARY) subtitle = "Summary"
  else {
    subtitle = morning ? "Morning Questions" : "Afternoon Questions"
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