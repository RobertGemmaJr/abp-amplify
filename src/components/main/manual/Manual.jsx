import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import FlexBox from "../../FlexBox";

import { CONTENT } from "../../../constants/enum";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  manual: {
    flexGrow: 1,
  },
}))

export default function Manual(props) {
    const classes = useStyles(0);
    const { setContent } = props;
    return (
      <FlexBox setContent={setContent}>
        <Container className={classes.manual} onClick={() => {
           // TEMP
           props.setContent(CONTENT.QUESTIONNAIRE)
         }}>
           Temporary text
        </Container>
      </FlexBox>
    )
}