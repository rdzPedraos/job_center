import React from "react";
import PropTypes from "prop-types";

import { Button, Drawer } from "@mui/material";
import { Clear } from "@mui/icons-material";

function DrawerComponent({
    open,
    onClose,
    className,
    children,
    anchor = "right",
    ...props
}) {
    return (
        <Drawer anchor={anchor} open={open} onClose={onClose} {...props}>
            <div
                className={`
                    min-h-full w-[100vw] lg:w-[600px] 
                    relative pt-16 px-5 pb-5 md:px-10 
                    overflow-y-scroll overflow-x-hidden 
                    ${className}
                `}
            >
                <Button
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: ".5rem",
                        top: "1rem",
                    }}
                >
                    <Clear className="text-gray-400 " fontSize="medium" />
                </Button>
                {children}
            </div>
        </Drawer>
    );
}

DrawerComponent.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.element,
    anchor: PropTypes.oneOf(["right", "center", "left"]),
};

export default DrawerComponent;
