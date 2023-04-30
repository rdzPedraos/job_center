import React from "react";
import PropTypes from "prop-types";
import { Slider } from "@mui/material";

function SalaryFilter(props) {
    return (
        <>
            <p className="text-xl">Salario</p>
            <Slider
                value={[2000000, 5000000]}
                valueLabelDisplay="auto"
                min={100000}
                step={100000}
                max={10000000}
            />
        </>
    );
}

SalaryFilter.propTypes = {};

export default SalaryFilter;
