import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Zoom,
} from "@mui/material";

import {
    DoneAll,
    ErrorOutlineOutlined,
    LightbulbOutlined,
    WarningAmberOutlined,
} from "@mui/icons-material";

const Transition = forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

function Modal({
    useOpen,
    title,
    content,
    dialogActions,
    width = "xs",
    modalStatus = "success",
}) {
    const [open, setOpen] = useOpen;

    const icons = {
        success: <DoneAll color="success" />,
        error: <ErrorOutlineOutlined color="error" />,
        info: <LightbulbOutlined color="info" />,
        warning: <WarningAmberOutlined color="warning" />,
    };

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            maxWidth={width}
            TransitionComponent={Transition}
        >
            {title && (
                <DialogTitle>
                    {icons[modalStatus]}
                    <span className="ml-2">¿Estás seguro de esta acción?</span>
                </DialogTitle>
            )}

            {content && (
                <DialogContent>
                    <DialogContentText>{content}</DialogContentText>
                </DialogContent>
            )}

            {dialogActions && (
                <DialogActions className="gap-3">{dialogActions}</DialogActions>
            )}
        </Dialog>
    );
}

Modal.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    dialogActions: PropTypes.element,
    width: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
    modalStatus: PropTypes.oneOf(["success", "warning", "info", "error"]),
};

export default Modal;
