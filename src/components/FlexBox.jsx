import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core"

import ResetButton from "./ResetButton";

const useStyles = makeStyles(theme => ({
  box: {
    width: "100%",
  },
}))

export default function FlexBox(props) {
  const classes = useStyles()
  const { handleResetClick, reset } = props
  return(
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
      className={classes.box}
    >
      {props.children}
      {reset && <ResetButton handleResetClick={handleResetClick}/>}
    </Box>
  )
}