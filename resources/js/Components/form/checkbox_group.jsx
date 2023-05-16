import React from "react";
import PropTypes from "prop-types";

import ErrorTextComponent from "../main/ErrorText";

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function CheckBoxGroupComponent({
    id,
    label,
    value = [],
    options,
    error,
    onHandleChange,
    ...otherProps
}) {
    const onChange = (e) => {
        const { name, checked } = e.target;

        if (checked) value.push(name);
        else value = value.filter((val) => val !== name);

        onHandleChange({
            target: {
                name: id,
                value,
            },
        });
    };

    return (
        <>
            <FormGroup {...otherProps}>
                {options.map((option, key) => {
                    const { id, name } =
                        typeof option === "object"
                            ? option
                            : { id: option, name: option };
                    return (
                        <FormControlLabel
                            key={key}
                            name={"" + id}
                            label={name}
                            control={
                                <Checkbox checked={value.includes("" + id)} />
                            }
                            onChange={onChange}
                        />
                    );
                })}
            </FormGroup>
            {error && <ErrorTextComponent text={error} />}
        </>
    );
}

CheckBoxGroupComponent.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.array,
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

export default CheckBoxGroupComponent;
