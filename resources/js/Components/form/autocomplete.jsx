import React from "react";
import PropTypes from "prop-types";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";

function AutoCompleteInputComponent({
    id,
    value,
    label,
    options,
    error,
    onHandleChange,
    icon,
    ...otherProps
}) {
    const Icon = icon;

    const handleChange = (e, val) => {
        onHandleChange({
            target: {
                name: id,
                value: val,
            },
        });
    };

    const fixedOptions = [];
    for (const option of options) {
        if (typeof option === "object") {
            fixedOptions.push(option.name);
        } else fixedOptions.push(option);
    }

    return (
        <Autocomplete
            freeSolo
            name={id}
            value={value ?? ""}
            onChange={handleChange}
            options={fixedOptions}
            renderInput={(params) => (
                <TextField
                    {...params}
                    {...otherProps}
                    label={label}
                    error={!!error}
                    helperText={error ? error + "*" : ""}
                    onChange={(e) => handleChange(e, e.target.value)}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: Icon ? (
                            <InputAdornment position="start">
                                <Icon color={error ? "error" : "gray"} />
                            </InputAdornment>
                        ) : null,
                    }}
                />
            )}
        />
    );
}

AutoCompleteInputComponent.propTypes = {};

export default AutoCompleteInputComponent;
