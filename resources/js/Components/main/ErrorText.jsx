import React from "react";
import PropTypes from "prop-types";

function ErrorTextComponent({ text, className, ...props }) {
    return (
        <span className={"text-error text-sm " + className} {...props}>
            {text ? text + "*" : ""}
        </span>
    );
}

ErrorTextComponent.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

export default ErrorTextComponent;
