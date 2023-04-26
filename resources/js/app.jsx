import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import GuestLayout from "./Layouts/GuestLayout";
import ApplicantLayout from "./Layouts/ApplicantLayout";

//Fuentes roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en-gb";

const pdfjs = await import("pdfjs-dist/build/pdf");
const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.entry");
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
window.PDFJS = pdfjs;

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
                else Component = ApplicantLayout;

                module.default.layout = (page) => <Component children={page} />;
            }
        });

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-gb"
            >
                <ThemeProvider theme={theme}>
                    <App {...props} />
                </ThemeProvider>
            </LocalizationProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
