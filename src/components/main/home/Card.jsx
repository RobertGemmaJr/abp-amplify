import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Content, Ptype } from "../../../models";

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
  const {setContent, form, setForm, ptype, image, text} = props;

  function handleCardClick() {
    setForm({...form, "ptype": ptype})
    switch(ptype) {
      case Ptype.FAMILY:
        setContent(Content.KEYPAD);
        break;
      case Ptype.STAFF:
        setContent(Content.KEYPAD);
        break;
      case Ptype.MANUAL:
        setContent(Content.MANUAL);
        break;
      default:
        console.error("Invalid form code: ", form.ptype)
        break;
    }
  }

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => handleCardClick()}>
        <CardMedia 
          className={classes.media}
          image={image}
        />
      </CardActionArea>
      <CardContent>
        <Typography align="center" component="h3" className={classes.text}>
          {text}
        </Typography>
      </CardContent>
    </Card>    
  )
}