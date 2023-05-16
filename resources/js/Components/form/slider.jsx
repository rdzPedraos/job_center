import React from "react";
import PropTypes from "prop-types";

import ErrorTextComponent from "../main/ErrorText";

import { Slider } from "@mui/material";

function SliderComponent({
    id,
    value,
    default_value,
    min,
    max,
    error,
    onHandleChange,
    marks = [],
    mark_brand = "$",
    ...otherProps
}) {
    marks.push({ value: min, label: mark_brand + min });
    marks.push({ value: max, label: mark_brand + max });

    return (
        <div className="px-4">
            <Slider
                name={id}
                value={value ?? default_value ?? [min, max] ?? [0, 100]}
                onChange={onHandleChange}
                valueLabelDisplay="auto"
                {...{ marks, min, max, ...otherProps }}
            />
            {error && <ErrorTextComponent text={error} />}
        </div>
    );
}

SliderComponent.propTypes = {
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    error: PropTypes.string,
    onHandleChange: PropTypes.func,
};

export default SliderComponent;
