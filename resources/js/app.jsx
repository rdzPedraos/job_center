import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import GuestLayout from "./Layouts/GuestLayout";
import ParticipantLayout from "./Layouts/ParticipantLayout";

//Fuentes roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        );

        page.then((module) => {
            if (module.default.layout === undefined) {
                let Component = <></>;

                if (name.startsWith("Auth/")) Component = GuestLayout;
                else if (name.startsWith("Admin/")) Component = <></>;
                else Component = ParticipantLayout;

                module.default.layout = (page) => <Component children={page} />;
            }
        });

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider theme={theme}>
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
