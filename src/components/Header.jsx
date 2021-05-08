import { AppBar, Container, Paper, Toolbar } from "@material-ui/core"
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

    function HButton(click, text) {
      return (
        <Button 
        variant="contained" 
        className={classes.hButton}
        onClick={click}
        color="secondary"
        size="large"
      >
        {text}
      </Button>
      )

    }

    return (
      <header className={classes.header}>
        <AppBar position="fixed">
        <Container>
            <Toolbar>
              <Typography 
                component="h4" 
                variant="h4" 
                className={classes.name}
              >
                Apple Blossom Health Check
              </Typography>
              {HButton(homeClick, "Home")}
              {HButton(resetClick, "Reset")}
              {HButton(menuClick, "Menu")}
            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar />
      </header>
    )
}