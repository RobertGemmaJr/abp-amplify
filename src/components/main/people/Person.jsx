import { makeStyles } from "@material-ui/styles";
import { Card, CardActionArea, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  person: {
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
  const {person, name, handleClick } = props;

  return (
    <Card className={classes.person}>
      <CardActionArea onClick={() => handleClick(person)} >
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