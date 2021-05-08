import { Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  person: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.light,
  },
  name: {
    // fontSize: 14,
  }
}))

export default function People(props) {
  const classes = useStyles();

  const name = "Robert Gemma, Jr."
  const id = 12345
  return (
    <Card className={classes.person}>
      <CardContent>
        <Typography 
          align="center" 
          variant="h7" 
          component="h3" 
          className={classes.name}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}