import { Box } from "@material-ui/core"

import ResetButton from "./ResetButton";

export default function FlexBox(props) {
  const { justifyContent, handleResetClick, reset } = props

  return(
    <Box 
      width={1}
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent={justifyContent ? justifyContent : "center"}
    >
      {props.children}
      {reset && <ResetButton handleResetClick={handleResetClick}/>}
    </Box>
  )
}