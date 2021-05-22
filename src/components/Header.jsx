import { AppBar, Container, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.light,
  },
  name: {
    flexGrow: 1,
  },
  hButton: {
    margin: theme.spacing(0, 1),
  },
}))

export default function Header(props) {
    const classes = useStyles();
    const { homeClick, resetClick, menuClick } = props;

    return (
      <header className={classes.header}>
        <AppBar position="fixed">
        <Container>
            <Toolbar>
              {/* Program Name */}
              <Typography 
                component="h4" 
                variant="h4" 
                className={classes.name}
              >
                Apple Blossom Health Check App
              </Typography>
              
              {/* Home Button */}
              <Button 
                variant="contained" 
                className={classes.hButton}
                onClick={homeClick}
                color="secondary"
                disabled={props.content === "menu" ? true: false}
              >
                Home
              </Button>

              {/* Reset Button */}
              <Button 
                variant="contained" 
                className={classes.hButton}
                onClick={resetClick}
                color="secondary"
                disabled={props.content === "home" || props.content === "menu" ? true: false}
              >
                Reset
              </Button>

              {/* Menu Button */}
              <Button 
                variant="contained" 
                className={classes.hButton}
                onClick={menuClick}
                color="secondary"
              >
                Menu
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar /> {/* Forces content below fixed AppBar */}
      </header>
    )
}