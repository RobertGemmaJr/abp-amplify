import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core"

import ResetButton from "./ResetButton";

const useStyles = makeStyles(theme => ({
  box: {
    width: "100%",
    alignItems: "center",
  },
}))

export default function FlexBox(props) {
  const classes = useStyles()
  return(
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      className={classes.box}
    >
      {props.children}
      <ResetButton setContent={props.setContent}/>
    </Box>
  )
}