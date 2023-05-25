import React from "react";
import PropTypes from "prop-types";

function TitleComponent({
    Type = "h1",
    size = "xl",
    children,
    className,
    ...props
}) {
    return (
        <Type
            className={`text-${size} text-primary font-bold mb-4 ${className}`}
            {...props}
        >
            {children}
        </Type>
    );
}

TitleComponent.propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOf(["md", "lg", "xl", "2xl", "3xl"]),
    className: PropTypes.string,
};

export default TitleComponent;
