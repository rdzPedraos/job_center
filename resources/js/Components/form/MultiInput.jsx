import React from "react";
import PropTypes from "prop-types";
import TextInputComponent from "./text";
import PasswordInputComponent from "./password";
import SelectInputComponent from "./select";
import CheckboxInputComponent from "./checkbox";

function MultiInput({ input, error, value, onHandleChange, disabled = false }) {
    delete input.value;
    const { id, label, type, ...otherProps } = input;

    if (disabled) {
        otherProps.variant = "filled";
        otherProps.disabled = true;
    }

    const Component = {
        noDisplay: null,
        select: SelectInputComponent,
        password: PasswordInputComponent,
        checkbox: CheckboxInputComponent,
        text: TextInputComponent,
        disabled: TextInputComponent,
    }[type ?? "text"];

    return !!Component ? (
        <Component
            id={id}
            label={label}
            value={value}
            error={error}
            onHandleChange={onHandleChange}
            {...otherProps}
        />
    ) : (
        <></>
    );
}

MultiInput.propTypes = {
    input: PropTypes.object,
};

export default MultiInput;
