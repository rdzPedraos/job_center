import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Dialog } from "@headlessui/react";
import {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

export default function Guest({ children }) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-base_white flex items-center justify-center">
            <div
                className="
                    block w-full sm:max-w-4xl 
                    mx-5 p-10 
                    bg-white shadow-md 
                    overflow-hidden rounded-lg"
            >
                <ApplicationLogo handleClick={() => setOpen(true)} />

                {children}
            </div>

            <Dialog
                open={open}
                onClose={() => alert("cerré")}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>This is an example</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        This is a default text This is a default text This is a
                        default text
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={() => setOpen(false)}> Cerrar </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
