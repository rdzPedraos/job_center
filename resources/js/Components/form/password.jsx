import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function PasswordInputComponent({
    id,
    value,
    icon,
    error,
    onHandleChange,
    ...otherProps
}) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const InputProps = {
        endAdornment: (
            <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        ),
    };

    if (icon) {
        const Icon = icon;
        InputProps.startAdornment = (
            <InputAdornment position="start">
                <Icon color={error ? "error" : "gray"} />
            </InputAdornment>
        );
    }

    return (
        <TextField
            fullWidth
            name={id}
            value={value ?? ""}
            error={!!error}
            helperText={error ? error + "*" : ""}
            onChange={onHandleChange}
            {...otherProps}
            type={showPassword ? "text" : "password"}
            InputProps={InputProps}
        />
    );
}

PasswordInputComponent.propTypes = {
    id: PropTypes.string,
    error: PropTypes.string,
    onHandleChange: PropTypes.func,
};

export default PasswordInputComponent;
