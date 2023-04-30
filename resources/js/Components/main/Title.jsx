import React from "react";
import PropTypes from "prop-types";

function TitleComponent({ Type = "h1", children, className, ...props }) {
    return (
        <Type
            className={"text-xl text-primary font-bold mb-4 " + className}
            {...props}
        >
            {children}
        </Type>
    );
}

TitleComponent.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
};

export default TitleComponent;
