import { Box, AppBar, Container, Toolbar, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import { Content, Ptype } from "../../models";

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
    const { content, form, homeClick, menuClick } = props

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

                {/* Header Button */}
                <Button 
                  variant="contained" 
                  className={classes.hButton}
                  onClick={
                    () => content === Content.HOME ? menuClick() : homeClick()
                  }
                  color="secondary"
                >
                  {content === Content.HOME ? "Menu" : "Home"}
                </Button>
              </Toolbar>
          </Container>
        </AppBar>
        <Toolbar /> {/* Forces content below fixed AppBar */}
      </Box>
    )
}