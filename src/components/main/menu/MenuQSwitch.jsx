import { makeStyles } from "@material-ui/styles";
import { Grid, FormControlLabel, Switch, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  outer: {
    flexShrink: 6,
  },
}))

export default function MenuQSwitch(props) {
  const classes = useStyles();
  const {state, setSwitch} = props;

  // Call setSwitch from <MenuQCard> on change
  const handleChange = (event) => {
    const value = (state.response === "Yes" ? "No" : "Yes");
    setSwitch(value)
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
              name="response"
              checked={state.response === "Yes" ? true : false}
              onChange={handleChange}
            />
          }
          label={props.label}
          labelPlacement="top"
        />
      </Grid>
      <Grid item xs>
        <Typography variant="body2" align="center"> {state.response} </Typography>
      </Grid>
    </Grid>
  )
}