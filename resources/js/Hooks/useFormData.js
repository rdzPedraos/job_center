import { useForm, usePage } from "@inertiajs/react";

/**
 * Setea la lógica de un formulario
 * @param {[object]} inputs Configuración de los inputs, debe ser un arreglo de objetos {id, label, type, id_options}
 * @param {object|null} inputsData Objeto clave(id)-valor(default) para setear un valor por defecto en los campos
 * @param {string|null} route Ruta donde se enviará la información
 * @param {string|null} method Método que usará
 * @returns {object}
 *      Retorna arreglo con la siguiente información:
 *      "data" <- Objeto clave-valor con la información predefinida o que tendrán los inputs por cada cambio.
 *      "errors", <- Objeto clave-valor me devuelve el error que hay en cada input una vez se envíe el formulario.
 *      "processing", <- Estado procesando.
 *      "handleSubmit", <- Función para enviar el formulario.
 *      "handleChangeInp"(id, value), <- Función para cambiar un campo.
 *      "inputs", <- Información del campo para mostrar html(lo traido en inputs más algunas operaciones lógicas)
 */
const useFormData = (inputs, inputsData = {}, route = null, method = null) => {
    const pageData = usePage().props;
    const formData = {};

    for (const input of inputs) {
        const id = input.id;

        input.value ??= inputsData[id] || "";

        if (input.id_options) {
            const id_op = input.id_options;
            input.options = inputsData[id_op] ?? pageData[id_op] ?? [];
        }
        formData[id] = input.value;
    }

    const { data, setData, errors, processing, post, get, put, patch, reset } =
        useForm(formData);

    const handleSubmit =
        Boolean(route) && Boolean(method)
            ? (e, successAction = () => {}, errorAction = () => {}) => {
                  e.preventDefault();
                  const methods = {
                      post,
                      get,
                      put,
                      patch,
                  };
                  methods[method](route, {
                      onSuccess() {
                          reset();
                          successAction();
                      },
                      onError() {
                          errorAction();
                      },
                  });
              }
            : null;

    //Evento para cuando se actualice la información de un input:
    const handleChangeInp = (event) => {
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
        errors,
        processing,
        inputs,
        handleChangeInp,
        ...(!!route && !!method
            ? { handleSubmit }
            : {
                  post,
                  get,
                  put,
                  patch,
                  reset,
              }),
    };
};
export { useFormData };
