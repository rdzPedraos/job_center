import React from "react";
import PropTypes from "prop-types";

function BoxComponent({ children, className, ...props }) {
    return (
        <div
            className={
                "bg-white py-7 px-5 shadow hover:shadow-lg rounded-md overflow-hidden " +
                className
            }
            {...props}
        >
            {children}
        </div>
    );
}

BoxComponent.propTypes = {};

export default BoxComponent;
