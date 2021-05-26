import { Grid, FormControlLabel, Switch, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  outer: {
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
      xs={2}
      className={classes.outer}
    >
      <Grid item xs>
        <FormControlLabel
          control={
            <Switch 
              name="response"
              checked={state.response}
              onChange={toggleSwitch}
              
            />
          }
          label={props.label}
          labelPlacement="top"
        />
      </Grid>
      <Grid item xs>
        <Typography variant="body2" align="center">
          {state.response ? "Yes" : "No"}
        </Typography>
      </Grid>
    </Grid>
  )
}