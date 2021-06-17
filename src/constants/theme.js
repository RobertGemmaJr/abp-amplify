import { green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      type: "light",
      secondary: green,
    },
  });

export default theme