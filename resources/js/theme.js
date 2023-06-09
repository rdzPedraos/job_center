import { createTheme } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "rgb(var(--primary-color))",
            contrastText: "rgb(var(--contrast-text))",
        },
        secondary: {
            main: "rgb(var(--secondary-color))",
            contrastText: "#fff",
        },
    },
});

export { theme };
