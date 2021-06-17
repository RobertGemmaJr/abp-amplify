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
  const {setContent, setPerson, person, name } = props;
  

  function handlePersonClick() {
    // Select person and display questions
    setPerson(person)
    setContent(CONTENT.QUESTIONNAIRE)
  }

  return (
    <Card>
      <CardActionArea 
        className={classes.person}
        onClick={() => handlePersonClick()}
      >
        <Typography 
          align="center"
          component="h3"
          className={classes.name}
        >
          {name}
        </Typography>
      </CardActionArea>
    </Card>
  )
}