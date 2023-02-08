import React from "react";
import PropTypes from "prop-types";
import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";

const SelectInputComponent = ({
    id,
    label,
    value,
    options,
    variant = "outlined",
    error,
    onHandleChange,
}) => {
    return (
        <FormControl error={!!error} variant={variant} fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                name={id}
                label={label}
                value={value}
                onChange={onHandleChange}
            >
                <MenuItem value="">SELECCIONE UNA OPCIÓN</MenuItem>
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{error}</FormHelperText>
        </FormControl>
    );
};

SelectInputComponent.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })
    ),
    variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
    error: PropTypes.string,
    onHandleChange: PropTypes.func,
};

export default SelectInputComponent;
