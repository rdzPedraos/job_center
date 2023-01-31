import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import TextInputComponent from "./form/text";
import PasswordInputComponent from "./form/password";

const DEFAULT_VARIANT = "outlined";

function MultiInput({ id, input, error, value, onHandleChange }) {
    switch (input.type) {
        case "select":
            return (
                <FormControl
                    error={!!error}
                    variant={input.variant ?? DEFAULT_VARIANT}
                >
                    <InputLabel>{input.label}</InputLabel>
                    <Select
                        name={id}
                        label={input.label}
                        value={value}
                        onChange={onHandleChange}
                    >
                        <MenuItem value={null}>SELECCIONE UNA OPCIÓN</MenuItem>
                        {input.options.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>{error}</FormHelperText>
                </FormControl>
            );

        case "password":
            return (
                <PasswordInputComponent
                    id={id}
                    label={input.label}
                    value={value}
                    variant={input.variant}
                    error={error}
                    onHandleChange={onHandleChange}
                    IconDetail={input.icon}
                />
            );

        default:
            return (
                <TextInputComponent
                    id={id}
                    label={input.label}
                    value={value}
                    variant={input.variant}
                    error={error}
                    onHandleChange={onHandleChange}
                    IconDetail={input.icon}
                />
            );
    }
}

MultiInput.propTypes = {
    input: PropTypes.object,
};

export default MultiInput;
