import React from "react";
import PropTypes from "prop-types";
import { Alert, Slide, Snackbar } from "@mui/material";

const SnackBarComponent = ({ open = false, status = "loading", content }) => {
    let theme = status;
    if (content === undefined) {
        switch (status) {
            case "loading":
                content = "Enviando información...";
                theme = "info";
                break;
            case "success":
                content = "Se ha cargado todo con éxito";
                break;
            case "error":
                content = "Ha ocurrido un error!";
                break;
        }
    }

    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            TransitionComponent={Slide}
        >
            <Alert severity={theme}>{content}</Alert>
        </Snackbar>
    );
};

SnackBarComponent.propTypes = {
    open: PropTypes.bool,
    status: PropTypes.arrayOf(["loading", "success", "error"]),
    content: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
};

export default SnackBarComponent;
