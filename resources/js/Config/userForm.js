import {
    DriveFileRenameOutline,
    ContactEmergency,
    Phone,
    Email,
    Key,
} from "@mui/icons-material";

const inputs = {
    document_type_id: {
        id: "document_type_id",
        type: "select",
        label: "Documento de identidad",
        id_options: "documentTypes",
    },
    document_number: {
        id: "document_number",
        format: "number",
        label: "Número de documento",
        placeholder: "1000000001",
        icon: ContactEmergency,
    },
    first_name: {
        id: "first_name",
        label: "Primer nombre",
        icon: DriveFileRenameOutline,
        placeholder: "Pepito",
    },
    middle_name: {
        id: "middle_name",
        label: "Segundo nombre",
        icon: DriveFileRenameOutline,
    },
    first_surname: {
        id: "first_surname",
        label: "Primer apellido",
        icon: DriveFileRenameOutline,
        placeholder: "Diaz",
    },
    middle_surname: {
        id: "middle_surname",
        label: "Segundo apellido",
        icon: DriveFileRenameOutline,
    },
    phone_number: {
        id: "phone_number",
        format: "number",
        label: "Número de teléfono",
        icon: Phone,
        placeholder: "3121234567",
    },
    email: {
        id: "email",
        format: "email",
        label: "Correo electrónico",
        icon: Email,
        placeholder: "ejem@plo.com",
    },
    current_password: {
        id: "current_password",
        type: "password",
        label: "Contraseña Actual",
        icon: Key,
        placeholder: "*******",
    },
    password: {
        id: "password",
        type: "password",
        label: "Nueva contraseña",
        icon: Key,
        placeholder: "*******",
    },
    password_confirmation: {
        id: "password_confirmation",
        type: "password",
        label: "Vuelva a ingresar la contraseña",
        icon: Key,
        placeholder: "*******",
    },
    remember: {
        id: "remember",
        label: "Recuérdame",
        type: "checkbox",
    },
    token: {
        id: "token",
        type: "noDisplay",
    },
};

export const getInputs = (page, showIcon = true) => {
    const data = Object.assign({}, inputs);
    const ids = [];

    switch (page) {
        case "register":
            ids.push(
                "document_type_id",
                "document_number",
                "first_name",
                "middle_name",
                "first_surname",
                "middle_surname",
                "phone_number",
                "email",
                "password",
                "password_confirmation"
            );
            break;

        case "login":
            ids.push("email", "password", "remember");
            break;

        case "updateProfile":
            ids.push(
                "document_type_id",
                "document_number",
                "first_name",
                "middle_name",
                "first_surname",
                "middle_surname",
                "phone_number"
            );
            break;

        case "updatePassword":
            ids.push("current_password", "password", "password_confirmation");
            break;

        case "updateEmail":
        case "forgotPassword":
            ids.push("email");
            break;

        case "resetPassword":
            ids.push("email", "password", "password_confirmation", "token");
            break;
    }

    const response = [];
    ids.forEach((id) => {
        if (!showIcon) data[id].icon = null;
        return response.push(data[id]);
    });

    return response;
};
export default [];
