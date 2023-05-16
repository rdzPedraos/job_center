import React from "react";
import PropTypes from "prop-types";

import TextInputComponent from "./text";
import PasswordInputComponent from "./password";
import SelectInputComponent from "./select";
import CheckboxInputComponent from "./checkbox";
import DateInputComponent from "./date";
import AutoCompleteInputComponent from "./autocomplete";
import SliderComponent from "./slider";
import RadioGroupComponent from "./radio_group";
import CheckBoxGroupComponent from "./checkbox_group";

function MultiInput({ input, error, value, onHandleChange, disabled = false }) {
    delete input.value;

    const { id, label, type, ...otherProps } = input;

    if (disabled) {
        otherProps.variant = "filled";
        otherProps.disabled = true;
    }

    if (type == "textarea") {
        otherProps.multiline = true;
    }

    const Component = {
        noDisplay: ({ id, value }) => (
            <input name={id} value={value} type="hidden" />
        ),
        disabled: TextInputComponent,
        text: TextInputComponent,
        password: PasswordInputComponent,
        textarea: TextInputComponent,
        date: DateInputComponent,
        select: SelectInputComponent,
        autocomplete: AutoCompleteInputComponent,
        checkbox: CheckboxInputComponent,
        checkbox_group: CheckBoxGroupComponent,
        radio_group: RadioGroupComponent,
        slider: SliderComponent,
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
