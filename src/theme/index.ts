import { createTheme } from "@mui/material/";
import { grey } from "@mui/material/colors";
const boxShadow =
  "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px";
// 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)
const CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#106EAD",
      contrastText: grey[50],
    },
    secondary: {
      main: "#C33C5E",
      contrastText: grey[50],
    },
  },
  typography: {
    fontFamily: '"Rubik", sans-serif',
    button: {
      textTransform: "none",
    },
  },
});

export default CustomTheme;
