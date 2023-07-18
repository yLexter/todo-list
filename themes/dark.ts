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
            default: "#303030",
            paper: "#424242",
        },
        text: {
            primary: "#ffffff",
            secondary: "#aaaaaa",
        },
    },
});