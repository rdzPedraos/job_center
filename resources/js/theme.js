import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(var(--primary-color))",
            contrastText: "rgb(var(--contrast-text))",
        },
    },
});

export { theme };
