import React from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@mui/material";
import { Input } from "postcss";

const TextInputComponent = ({
    id,
    type = "text",
    label,
    value,
    IconDetail,
    variant = "outlined",
    error,
    onHandleChange,
}) => {
    const InputProps = {};
    if (IconDetail) {
        InputProps;
    }

    return (
        <TextField
            fullWidth
            name={id}
            type={type}
            label={label}
            value={value}
            variant={variant}
            error={!!error}
            helperText={error}
            onChange={onHandleChange}
            InputProps={
                IconDetail
                    ? {
                          startAdornment: (
                              <InputAdornment position="start">
                                  <IconDetail
                                      color={error ? "error" : "gray"}
                                  />
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
    label: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.element,
    variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
    error: PropTypes.string,
    onHandleChange: PropTypes.func,
};

export default TextInputComponent;
