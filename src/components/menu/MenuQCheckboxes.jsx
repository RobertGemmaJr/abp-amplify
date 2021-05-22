import { makeStyles } from "@material-ui/styles";
import { Box, Checkbox, Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  row: {
    // flexGrow: 1,
  }
}))

function Row(props) {
  return (
    <Grid container item alignItems="center">
      {props.children}
    </Grid>
  )
}

export default function MenuQCheckboxes(props) {
  const classes = useStyles();
  const {state, setState} = props;

  const handleCheckboxChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked})
  }

  return (
    <Grid container xs={8} align="center">
      <Row className={classes.row}>
        <Grid item xs>
        </Grid>
        <Grid item xs>
          <Typography>Morning</Typography>
        </Grid>
        <Grid item xs>
          <Typography>Afternoon</Typography>
        </Grid>
      </Row>
      
      <Row className={classes.row}>
        <Grid item xs>
          <Typography align="right">Child</Typography>
        </Grid>
        <Grid item xs>
          <Checkbox />
        </Grid>
        <Grid item xs>
          <Checkbox />
        </Grid>
      </Row>

      <Row className={classes.row}>
        <Grid item xs>
          <Typography align="right">Staff</Typography>
        </Grid>
        <Grid item xs>
          <Checkbox />
        </Grid>
        <Grid item xs>
          <Checkbox />
        </Grid>
      </Row>

      <Row className={classes.row}>
        <Grid item xs align="center">
          <Typography align="right">Manual</Typography>
        </Grid>
        <Grid item xs>
          <Checkbox />
        </Grid>
        <Grid item xs>
          <Checkbox />
        </Grid>
      </Row>
    </Grid>
  )
}