import {
    DriveFileRenameOutline,
    ContactEmergency,
    Phone,
    Email,
    Key,
} from "@mui/icons-material";

export const CREATE_USER_INPUTS = [
    {
        id: "document_type_id",
        label: "Documento de identidad",
        type: "select",
        id_options: "documentTypes",
    },
    {
        id: "document_number",
        label: "Número de documento",
        type: "number",
        icon: ContactEmergency,
    },
    {
        id: "first_name",
        label: "Primer nombre",
        icon: DriveFileRenameOutline,
    },
    {
        id: "middle_name",
        label: "Segundo nombre",
        icon: DriveFileRenameOutline,
    },
    {
        id: "first_surname",
        label: "Primer apellido",
        icon: DriveFileRenameOutline,
    },
    {
        id: "middle_surname",
        label: "Segundo apellido",
        icon: DriveFileRenameOutline,
    },
    {
        id: "phone_number",
        label: "Número de teléfono",
        type: "phone",
        icon: Phone,
    },
    {
        id: "email",
        label: "Correo electrónico",
        type: "email",
        icon: Email,
    },
    {
        id: "password",
        label: "Contraseña",
        type: "password",
        icon: Key,
    },
    {
        id: "password_confirmation",
        label: "Vuelva a ingresar la contraseña",
        type: "password",
        icon: Key,
    },
];
