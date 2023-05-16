import React from "react";
import PropTypes from "prop-types";

function RoundedBorder({ children, classDiv1, classDiv2, ...props }) {
    return (
        <div
            className={`p-3 inline-block rounded-full bg-gray-400 bg-opacity-20 ${classDiv1}`}
            {...props}
        >
            <div
                className={`p-2 inline-block rounded-full bg-gray-400 text-white ${classDiv2}`}
            >
                {children}
            </div>
        </div>
    );
}

RoundedBorder.propTypes = {};

export default RoundedBorder;
