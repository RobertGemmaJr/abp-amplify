import { green } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      type: "light",
      secondary: green,
    },
  });

export default theme