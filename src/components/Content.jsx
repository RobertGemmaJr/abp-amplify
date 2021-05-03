import { makeStyles } from "@material-ui/core";
import styled from "styled-components"

const MyContent = styled.div`
  padding: 2%;
  flex: 1; // Main flex, push content to footer
`;

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2%",
    flex: "1", // Main flex, push content to footer
  }
}))

export default function Content(props) {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>
}