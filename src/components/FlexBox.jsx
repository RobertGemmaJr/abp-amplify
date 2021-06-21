import { makeStyles } from "@material-ui/styles";
import { Box, Button } from "@material-ui/core"

import { CONTENT } from "../constants/enum";
import ResetButton from "./ResetButton";

const useStyles = makeStyles(theme => ({
  box: {
    width: "100%",
    alignItems: "center",
  },
}))

export default function FlexBox(props) {
  const classes = useStyles()
  const { setContent, reset } = props
  return(
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      className={classes.box}
    >
      {props.children}
      {
        reset ?
          <ResetButton setContent={props.setContent}/>
        :
          <Button 
            variant="contained" 
            className={classes.hButton}
            onClick={() => setContent(CONTENT.MENU)}
            color="secondary"
            size="large"
          >
            Menu
          </Button>}
    </Box>
  )
}