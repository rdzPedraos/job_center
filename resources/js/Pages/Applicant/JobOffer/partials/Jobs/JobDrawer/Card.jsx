import React from "react";
import PropTypes from "prop-types";
import RoundedBorder from "@/Components/main/RoundedBorder";

function Card({ icon, content, className, ...props }) {
    return (
        <div
            className={`grid grid-cols-[auto_1fr] items-center gap-5 p-4 rounded-lg border-[1px] ${className}`}
            {...props}
        >
            <RoundedBorder>{icon}</RoundedBorder>
            <div className="flex flex-col justify-center">{content}</div>
        </div>
    );
}

Card.propTypes = {
    icon: PropTypes.element,
    content: PropTypes.element,
    className: PropTypes.string,
};

export default Card;
