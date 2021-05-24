import { AppBar, Box, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.light,
  },
  name: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  hButton: {
    margin: theme.spacing(0, 1),
  },
}))

export default function Header(props) {
    const classes = useStyles();

    return (
      <header className={classes.header}>
        <AppBar position="fixed">
        <Box>
            <Toolbar>
              {/* Program Name */}
              <Typography 
                component="h4" 
                variant="h4" 
                className={classes.name}
              >
                Apple Blossom Health Check App
              </Typography>
              
              <Typography>{props.form}</Typography>
              {/* Home Button */}
              <Button 
                variant="contained" 
                className={classes.hButton}
                onClick={props.homeClick}
                color="secondary"
              >
                Home
              </Button>
            </Toolbar>
          </Box>
        </AppBar>
        <Toolbar /> {/* Forces content below fixed AppBar */}
      </header>
    )
}