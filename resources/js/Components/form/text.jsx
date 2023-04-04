import React from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@mui/material";

function TextInputComponent({
    id,
    value,
    icon,
    format = "text",
    error,
    onHandleChange,
    ...otherProps
}) {
    const Icon = icon;

    return (
        <TextField
            fullWidth
            name={id}
            value={value ?? ""}
            type={format}
            error={!!error}
            helperText={error}
            onChange={onHandleChange}
            {...otherProps}
            InputProps={{
                startAdornment: Icon ? (
                    <InputAdornment position="start">
                        <Icon color={error ? "error" : "gray"} />
                    </InputAdornment>
                ) : null,
            }}
        />
    );
}

TextInputComponent.propTypes = {
    id: PropTypes.string,
    format: PropTypes.string,
    variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
    error: PropTypes.string,
    onHandleChange: PropTypes.func,
};

export default TextInputComponent;
