import { makeStyles } from "@material-ui/styles";
import { Grid, FormControlLabel, Switch, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  outer: {
    flexShrink: 6,
  },
}))

export default function MenuQSwitch(props) {
  const classes = useStyles();
  const {state, setState } = props;

  const toggleSwitch = (event) => {
    setState({...state, [event.target.name]: event.target.checked });
  }

  return (
    <Grid 
      container 
      direction="column" 
      alignContent="center"
      className={classes.outer}
    >
      <Grid item xs>
        <FormControlLabel
          control={
            <Switch 
              name={props.switchName}
              checked={props.switchChecked}
              onChange={toggleSwitch}
            />
          }
          label={props.label}
          labelPlacement="top"
        />
      </Grid>
      <Grid item xs>
        <Typography variant="body2" align="center">
          {props.switchChecked ? "Yes" : "No"}
        </Typography>
      </Grid>
    </Grid>
  )
}