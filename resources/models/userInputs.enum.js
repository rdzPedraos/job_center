import {
    DriveFileRenameOutline,
    ContactEmergency,
    Phone,
    Email,
    Key,
} from "@mui/icons-material";

export const USER_INPUTS = {
    document_type_id: {
        label: "Documento de identidad",
        type: "select",
    },
    document_number: {
        label: "Número de documento",
        type: "number",
        icon: ContactEmergency,
    },
    first_name: {
        label: "Primer nombre",
        icon: DriveFileRenameOutline,
    },
    middle_name: {
        label: "Segundo nombre",
        icon: DriveFileRenameOutline,
    },
    first_surname: {
        label: "Primer apellido",
        icon: DriveFileRenameOutline,
    },
    middle_surname: {
        label: "Segundo apellido",
        icon: DriveFileRenameOutline,
    },
    phone_number: {
        label: "Número de teléfono",
        type: "phone",
        icon: Phone,
    },
    email: {
        label: "Correo electrónico",
        type: "email",
        icon: Email,
    },
    password: {
        label: "Contraseña",
        type: "password",
        icon: Key,
    },
    password_confirmation: {
        label: "Vuelva a ingresar la contraseña",
        type: "password",
        icon: Key,
    },
};
