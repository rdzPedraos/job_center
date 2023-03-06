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
        icon: ContactEmergency,
    },
    first_name: {
        id: "first_name",
        label: "Primer nombre",
        icon: DriveFileRenameOutline,
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
    },
    email: {
        id: "email",
        format: "email",
        label: "Correo electrónico",
        icon: Email,
    },
    password: {
        id: "password",
        type: "password",
        label: "Contraseña",
        icon: Key,
    },
    password_confirmation: {
        id: "password_confirmation",
        type: "password",
        label: "Vuelva a ingresar la contraseña",
        icon: Key,
    },
    remember: {
        id: "remember",
        label: "Recuérdame",
        type: "checkbox",
    },
};

export const getInputs = (page) => {
    const data = Object.assign({}, inputs);

    switch (page) {
        case "login":
            return [data.email, data.password, data.remember];

        case "register":
            delete data.remember;
            return Object.values(data);

        case "updateProfile":
            delete data.password;
            delete data.password_confirmation;
            delete data.remember;
            return Object.values(data);

        case "updatePassword":
            return [data.password, data.password_confirmation];

        case "forgotPassword":
            return [data.email];

        case "resetPassword":
            data.password.label = "Nueva contraseña";
            return [
                data.email,
                data.password,
                data.password_confirmation,
                { id: "token", type: "noDisplay" },
            ];
    }
};
export default [];
