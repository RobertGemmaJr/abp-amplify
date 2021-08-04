import { Box, AppBar, Container, Toolbar, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { Ptype } from "../../models";

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
    const { form, homeClick } = props

    return (
      <Box component="header" className={classes.header}>
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
                  {form.ptype !== Ptype.NONE && form.ptype}
                </Typography>

                {/* Home Button */}
                <Button 
                  variant="contained" 
                  className={classes.hButton}
                  onClick={() => homeClick()}
                  color="secondary"
                >
                  Home
                </Button>
              </Toolbar>
          </Container>
        </AppBar>
        <Toolbar /> {/* Forces content below fixed AppBar */}
      </Box>
    )
}