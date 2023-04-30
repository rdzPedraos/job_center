import MultiInput from "@/Components/form/MultiInput";
import { useState } from "react";
import { useFormData } from "../../Hooks/useFormData";

/**
 * Provee funciones para el manejo abstracto de formularios, haciendo uso del hook useFormData.
 * @param {array} inputTemplates Contiene todas las propiedades de cada input (id, icon, label, type, format, placeholder, ...)
 * @param {object} inputsData Un json formato llave:valor de los elementos por defecot a añadir,
 *                          si usó la propiedad "id_options" en un input de "inputTemplates", relacione aqui esa llave con un valor que debe ser un arreglo de objetos {id, name}
 * @param {string} route Ruta a donde será enviado el formulario
 * @param {string} method Método por el cuál será enviado GET, POST, PUT, PATCH, DELTE
 * @param {boolean} resetform Si desea que una vez el formulario sea enviado se resetee, marque true, de lo contrario false
 * @param {boolean} disabled Si desea que los valores por defecto vengan desabilitados marque true.
 * @returns {object}
 *      -processing: Está activo mientras se esté enviando un formulario.
        -handleSubmit: Método para el envío del formulario, tal como especifica el hook, se le puede atribuir 3 parametros (event, onSucces(), onFalse())
        -Inputs: Campos a imprimir
        -setDisabledInputs: Si desea utilizar un estado para habilitar y deshabilitar los inputs, use este estado.
        -handleSubmitAndEditMode: Si desea un manejo abstracto del submit, de tal forma que una vez se envíe el formulario los inputs se deshabiliten, y al dar submit se habilite nuevamente los inputs
 */
function utilInput(
    inputTemplates,
    inputsData,
    route,
    method,
    resetform = false
) {
    const form = useFormData(
        inputTemplates,
        inputsData,
        route,
        method,
        resetform
    );

    const { inputs, data, errors, handleChangeInp } = form;

    const values = [];
    Object.values(inputs).forEach((Inp) => {
        const id = Inp.id;
        values[id] = (
            <MultiInput
                key={id}
                input={Inp}
                error={errors[id]}
                value={data[id]}
                onHandleChange={handleChangeInp}
            />
        );
    });

    return {
        ...form,
        inputs: values,
    };
}

export default utilInput;
