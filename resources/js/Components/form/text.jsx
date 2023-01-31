import React from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@mui/material";

const TextInputComponent = ({
    id,
    label,
    value,
    IconDetail,
    variant = "outlined",
    error,
    onHandleChange,
}) => {
    return (
        <TextField
            name={id}
            label={label}
            value={value}
            variant={variant}
            error={!!error}
            helperText={error}
            onChange={onHandleChange}
            InputProps={{
                startAdornment: IconDetail ? (
                    <InputAdornment position="start">
                        <IconDetail color={error ? "error" : "gray"} />
                    </InputAdornment>
                ) : (
                    <></>
                ),
            }}
        />
    );
};

TextInputComponent.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.element,
    variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
    error: PropTypes.string,
    onHandleChange: PropTypes.func,
};

export default TextInputComponent;
