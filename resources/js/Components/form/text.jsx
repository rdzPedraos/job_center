import React from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@mui/material";

const TextInputComponent = ({
    id,
    icon,
    format = "text",
    error,
    onHandleChange,
    ...otherProps
}) => {
    const Icon = icon;

    return (
        <TextField
            fullWidth
            name={id}
            type={format}
            error={!!error}
            helperText={error}
            onChange={onHandleChange}
            {...otherProps}
            InputProps={
                Icon
                    ? {
                          startAdornment: (
                              <InputAdornment position="start">
                                  <Icon color={error ? "error" : "gray"} />
                              </InputAdornment>
                          ),
                      }
                    : {}
            }
        />
    );
};

TextInputComponent.propTypes = {
    id: PropTypes.string,
    format: PropTypes.string,
    variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
    error: PropTypes.string,
    onHandleChange: PropTypes.func,
};

export default TextInputComponent;
