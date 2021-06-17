import { Card, CardActionArea, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { CONTENT } from "../../constants/enum";

const useStyles = makeStyles(theme => ({
  person: {
    width: "100%",
    padding: theme.spacing(3, 1),
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  name: {
    fontWeight: "bold",
  },
}))


export default function Person(props) {
  const classes = useStyles();
  

  function handlePersonClick(id) {
    // Select person (by id) and display questions
    console.log(id)
    props.setContent(CONTENT.QUESTIONNAIRE)
  }

  // Will search for this info with props.id (from <People>)
  const fName = "Robert"
  const lName = "Gemma"
  return (
    <Card>
      <CardActionArea 
        className={classes.person}
        onClick={() => handlePersonClick(props.id)}
      >
        <Typography 
          align="center"
          component="h3"
          className={classes.name}
        >
          {fName} {lName}
        </Typography>
      </CardActionArea>
    </Card>
  )
}