import React from "react";
import PropTypes from "prop-types";
import Logo from "../../img/logo.png";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Zoom,
} from "@mui/material";
import { Link } from "@inertiajs/react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useState } from "react";
import Modal from "./Modal";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

export default function ApplicationLogo({
    justIcon = false,
    txtSize = "2xl",
    imgSize = "10",
    gapSize = "3",
    justify = "center",
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`flex justify-${justify}`}>
            {/* Logo */}
            <button
                onClick={() => setOpen(true)}
                className={`flex items-center gap-${gapSize} hover:opacity-80`}
                title="Ir al inicio"
            >
                <img
                    src={Logo}
                    className={`w-${imgSize}`}
                    alt="Escudo Universitario"
                />
                {!justIcon && (
                    <h1
                        className={`text-gray-600 font-extrabold text-${txtSize}`}
                    >
                        Unitrópico
                    </h1>
                )}
            </button>

            {/*  Modal para salir de la página */}
            <Modal
                useOpen={[open, setOpen]}
                modalStatus="warning"
                title="¿Estás seguro de esta acción?"
                content="Serás redireccionado a la página principal, ¿seguro de
                        querer hacer esto?"
                dialogActions={
                    <>
                        <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        <Link href="/">
                            <Button
                                variant="contained"
                                onClick={() => setOpen(false)}
                            >
                                Continuar
                            </Button>
                        </Link>
                    </>
                }
            />
        </div>
    );
}

ApplicationLogo.propTypes = {
    justIcon: PropTypes.bool,
    txtSize: PropTypes.string,
    imgSize: PropTypes.string,
    gapSize: PropTypes.string,
    handleClick: PropTypes.func,
    justify: PropTypes.oneOf(["center", "end", "start"]),
};
