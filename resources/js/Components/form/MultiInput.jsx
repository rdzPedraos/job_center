import React from "react";
import PropTypes from "prop-types";
import TextInputComponent from "./text";
import PasswordInputComponent from "./password";
import SelectInputComponent from "./select";
import CheckboxInputComponent from "./checkbox";

function MultiInput({ input, error, value, onHandleChange }) {
    switch (input.type) {
        case "select":
            return (
                <SelectInputComponent
                    id={input.id}
                    label={input.label}
                    value={value}
                    options={input.options}
                    variant={input.variant}
                    error={error}
                    onHandleChange={onHandleChange}
                />
            );

        case "password":
            return (
                <PasswordInputComponent
                    id={input.id}
                    label={input.label}
                    value={value}
                    variant={input.variant}
                    error={error}
                    onHandleChange={onHandleChange}
                    IconDetail={input.icon}
                />
            );

        case "checkbox":
            return (
                <CheckboxInputComponent
                    id={input.id}
                    label={input.label}
                    isChecked={value}
                    onHandleChange={onHandleChange}
                    Icon={input.Icon}
                    CheckedIcon={input.CheckedIcon}
                />
            );

        default:
            return (
                <TextInputComponent
                    id={input.id}
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
