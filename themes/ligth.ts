import { createTheme } from "@mui/material";

export const LigthTheme = createTheme({
    palette: {
        primary: {
            main: "#2196f3",
        },
        secondary: {
            main: "#f50057",
        },
        background: {
            default: "#ffffff", // Cor de fundo padrão
            paper: "#f5f5f5", // Cor de fundo do papel
        },
        text: {
            primary: "#000000", // Cor do texto principal
            secondary: "#888888", // Cor do texto secundário
        },
    },
});