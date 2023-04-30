import React from "react";
import PropTypes from "prop-types";

import { Flag, Verified } from "@mui/icons-material";

function Footer({ academic_program, academic_faculty, className, ...props }) {
    return (
        <div
            className={`flex gap-5 text-xs text-gray-400 ${className}`}
            {...props}
        >
            <span className="flex items-center">
                <Verified className="text-blue-500 mr-1" />
                {academic_program.name}
            </span>
            <span className="flex items-center">
                <Flag className="text-orange-400 mr-1" />
                {academic_faculty.name}
            </span>
        </div>
    );
}

const name_is_required = PropTypes.shape({
    name: PropTypes.string.isRequired,
}).isRequired;

Footer.propTypes = {
    academic_program: name_is_required,
    academic_faculty: name_is_required,
};

export default Footer;
