import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { CONTENT } from "../../constants/enum"

const useStyles = makeStyles(theme => ({
  card: {
    flexGrow: 1,
    alignContent: "center",
    margin: theme.spacing(1),
  },
  media: {
    height: 300,
  },
  text: {
    fontWeight: "bold"
  }
}))

export default function HomeCard(props) {
  const classes = useStyles();

  function handleCardClick(form) {
    props.setForm(form)
    switch(form) {
      case "Family Form":
        props.setContent(CONTENT.KEYPAD);
        break;
      case "Staff Form":
        props.setContent(CONTENT.KEYPAD);
        break;
      case "Manual Entry":
        props.setContent(CONTENT.MANUAL);
        break;
      default:
          console.error("Invalid form code")
          break;
    }
  }

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => handleCardClick(props.text)}>
        <CardMedia 
          className={classes.media}
          image={props.image}
        />
      </CardActionArea>
      <CardContent>
        <Typography align="center" component="h3" className={classes.text}>
          {props.text}
        </Typography>
      </CardContent>
    </Card>    
  )
}