import { AppBar, Container, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { FORM } from "../constants/enum"

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

// Renders the form's text
function formText(form) {
  switch(form) {
    case FORM.NONE: return ""
    case FORM.FAMILY: return "FAMILY"
    case FORM.STAFF: return "STAFF"
    case FORM.MANUAL: return "MANUAL"
    default:
      console.error("Invalid form code:", form)
      break;
  }
}

export default function Header(props) {
    const classes = useStyles();

    return (
      <header className={classes.header}>
        <AppBar position="fixed">
          <Container disableGutters>
              <Toolbar>
                {/* Program Name */}
                <Typography 
                  component="h4" 
                  variant="h4" 
                  className={classes.name}
                >
                  Apple Blossom Health Check App
                </Typography>

                {/* Display Form */}
                <Typography>
                  {formText(props.form)}
                </Typography>

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
          </Container>
        </AppBar>
        <Toolbar /> {/* Forces content below fixed AppBar */}
      </header>
    )
}