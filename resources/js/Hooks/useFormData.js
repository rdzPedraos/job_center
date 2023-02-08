import { useForm, usePage } from "@inertiajs/react";
import PropTypes from "prop-types";
import React from "react";

const useFormData = (inputConfig, inputData = {}) => {
    const pageData = usePage().props;
    const formData = {};

    for (const input of inputConfig) {
        const id = input.id;

        if (input.value === undefined) {
            input.value = inputData[id] || "";
        }

        if (input.id_options) {
            input.options = pageData[input.id_options];
        }

        formData[id] = input.value;
    }

    const { data, setData, post, errors, processing } = useForm(formData);

    //Evento para cuando se actualice la información de un input:
    const onHandleChange = (event) => {
        const name = event.target.name;
        errors[name] = "";
        setData(
            name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    return {
        data,
        post,
        errors,
        processing,
        onHandleChange,
        Inputs: inputConfig,
    };
};

/* useFormData.propTypes = {
    inputConfig: PropTypes.array.isRequired,
    inputData: PropTypes.object,
}; */

export { useFormData };
