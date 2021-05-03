import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.secondary,
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "100%",
  },
  '& p': {
    fontSize: "1.2em",
    color: "#FFFFFF"
  },
}))


export default function Footer(props) {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return(
    <footer className={classes.root}>
      <p>Copyright {year} © DisruptWorks Technologies</p>
    </footer>
  )
}