import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  card: {
    flexGrow: 1,
    alignContent: "center",
    margin: theme.spacing(1),
  },
  media: {
    height: 300,
  },
}))

export default function HomeCard(props) {
  const classes = useStyles();

  function handleCardClick() {
    props.setContent("keypad")
  }

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => handleCardClick()}>
        <CardMedia 
          className={classes.media}
          image={props.image}
          title="Family Logo"
        />
      </CardActionArea>
      <CardContent>
        <Typography 
            align="center"
            variant="" 
            component="h3"
          >
            {props.text}
          </Typography>
      </CardContent>
      
    </Card>    
  )
}