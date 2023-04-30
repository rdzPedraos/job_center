import { useForm, usePage } from "@inertiajs/react";
import { toast } from "react-toastify";

/**
 * Setea la lógica de un formulario
 * @param {[object]} inputs Configuración de los inputs, debe ser un arreglo de objetos {id, label, type, id_options}
 * @param {object|null} inputsData Objeto clave(id)-valor(default) para setear un valor por defecto en los campos
 * @param {string|null} route Ruta donde se enviará la información
 * @param {string|null} method Método que usará
 * @param {boolean} resetform Si desea que el método se resetee marque True
 * @returns {object}
 *      Retorna arreglo con la siguiente información:
 *      "data" <- Objeto clave-valor con la información predefinida o que tendrán los inputs por cada cambio.
 *      "errors", <- Objeto clave-valor me devuelve el error que hay en cada input una vez se envíe el formulario.
 *      "processing", <- Estado procesando.
 *      "handleSubmit", <- Función para enviar el formulario.
 *      "handleChangeInp"(id, value), <- Función para cambiar un campo.
 *      "inputs", <- Información del campo para mostrar html(lo traido en inputs más algunas operaciones lógicas)
 */
const useFormData = (
    inputs,
    inputsData = {},
    route = null,
    method = null,
    resetform = false
) => {
    const pageData = usePage().props;
    const formData = {};

    for (const _id in inputs) {
        //Is better to do cycle with "in" for accept objects and arrays iterables.
        const input = inputs[_id];
        const id = input.id;

        //Assign value from second param if not exist by default.
        input.value ??= inputsData[id] || "";

        //Set options if had an id options.
        if (input.id_options) {
            const id_op = input.id_options;
            input.options = inputsData[id_op] ?? pageData[id_op] ?? [];
        }

        if (input.value) {
            formData[id] = input.value;
        }
    }

    const form = useForm(formData);
    const { setData, errors, post, get, put, patch, reset } = form;

    const handleSubmit = (e, onSucces = () => {}, onError = () => {}) => {
        if (e) {
            e.preventDefault();
        }

        const methods = {
            post,
            get,
            put,
            patch,
        };

        document.body.style.cursor = "wait";
        methods[method](route, {
            preserveScroll: true,
            onSuccess({ props: { flash } }) {
                if (flash.alert) {
                    const {
                        alert: { content, status },
                    } = flash;
                    toast[status](content, {
                        position: "bottom-left",
                        autoClose: 5000,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                }
                if (resetform) reset();
                onSucces();
                document.body.style.cursor = "default";
            },
            onError() {
                onError();
                document.body.style.cursor = "default";
            },
        });
    };

    //Evento para cuando se actualice la información de un input:
    const handleChangeInp = (event) => {
        const name = event.target.name;
        delete errors[name];
        setData(
            name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    return {
        ...form,
        inputs,
        handleChangeInp,
        handleSubmit,
    };
};

export { useFormData };
