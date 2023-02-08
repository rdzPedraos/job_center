import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordInputComponent = ({
    id,
    label,
    value,
    IconDetail,
    variant = "outlined",
    error,
    onHandleChange,
}) => {
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

    if (IconDetail)
        InputProps.startAdornment = (
            <InputAdornment position="start">
                <IconDetail color={error ? "error" : "gray"} />
            </InputAdornment>
        );

    return (
        <TextField
            fullWidth
            name={id}
            label={label}
            value={value}
            variant={variant}
            error={!!error}
            helperText={error}
            onChange={onHandleChange}
            type={showPassword ? "text" : "password"}
            InputProps={InputProps}
        />
    );
};

PasswordInputComponent.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.element,
    variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
    error: PropTypes.string,
    onHandleChange: PropTypes.func,
};

export default PasswordInputComponent;
