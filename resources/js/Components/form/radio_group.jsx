import React from "react";
import PropTypes from "prop-types";

import ErrorTextComponent from "../main/ErrorText";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

function RadioGroupComponent({
    id,
    label,
    value,
    options,
    error,
    onHandleChange,
    ...otherProps
}) {
    return (
        <>
            <RadioGroup name={id} onChange={onHandleChange} {...otherProps}>
                {options.map((option, key) => {
                    const { id, name } =
                        typeof option === "object"
                            ? option
                            : { id: option, name: option };

                    return (
                        <FormControlLabel
                            key={key}
                            value={id}
                            label={name}
                            control={<Radio />}
                        />
                    );
                })}
            </RadioGroup>
            {error && <ErrorTextComponent text={error} />}
        </>
    );
}

RadioGroupComponent.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    options: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    error: PropTypes.string,
    onHandleChange: PropTypes.func,
};

export default RadioGroupComponent;
