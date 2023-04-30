import React from "react";
import PropTypes from "prop-types";

function ExperienceFilter(props) {
    return (
        <>
            <p className="text-xl">Experiencia Requerida</p>
            <ul>
                <li>Sin Experiencia</li>
                <li>1-2 años de experiencia</li>
                <li>3-5 años de experiencia</li>
                <li>+5 años de experiencia</li>
            </ul>
        </>
    );
}

ExperienceFilter.propTypes = {};

export default ExperienceFilter;
