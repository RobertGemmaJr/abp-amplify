import { Container, Card, CardContent, GridList, GridListTile, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  people: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  person: {
    width: "100%",
    height: "100%",
  }
}))

export default function People(props) {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.people}>
    <GridList cellHeight={150} cols={4} spacing={10} className={classes.gridList}>
      <GridListTile cols={1}>
        <Card className={classes.person}>
          <CardContent>
            <Typography align="center">This is a test</Typography>
          </CardContent>
        </Card>
      </GridListTile>
      <GridListTile cols={1}>
        <Card className={classes.person}>
          <CardContent>
            <Typography align="center">This is a test</Typography>
          </CardContent>
        </Card>
      </GridListTile>
      <GridListTile cols={1}>
        <Card className={classes.person}>
          <CardContent>
            <Typography align="center">This is a test</Typography>
          </CardContent>
        </Card>
      </GridListTile>
      {/* <Card className={classes.person}>
        <CardContent>
          <Typography align="center">This is a test</Typography>
        </CardContent>
      </Card>

      <Card className={classes.person}>
        <CardContent>
          <Typography align="center">This is a test</Typography>
        </CardContent> */}
      {/* </Card> */}
    </GridList>
    </Container>
  )
}