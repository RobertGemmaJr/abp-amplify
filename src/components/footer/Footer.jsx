import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
  },
  copyright: {
    color: theme.palette.common.white,
  }
}))

export default function Footer(props) {
  const classes = useStyles();
  
  return (
    <footer className={classes.footer}>
      <Container>
        <Typography 
          variant="body2"
          align="center"
          className={classes.copyright}
        >
          {"Copyright © DisruptWorks Technologies "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  )
}