import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
   palette: {
      primary: {
         main: "#2196f3",
      },
      secondary: {
         main: "#f50057",
      },
      background: {
         default: "#000000",
         paper: "#303030",
      },
      text: {
         primary: "#ffffff",
         secondary: "#aaaaaa",
      },
   },
});
