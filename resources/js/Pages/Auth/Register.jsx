import { Head, Link } from "@inertiajs/react";

import { Button } from "@mui/material";

import SnackBarComponent from "@/Components/SnackBar";

import MultiInput from "@/Components/form/MultiInput";
import { useFormData } from "@/Hooks/useFormData";

import {
    DriveFileRenameOutline,
    ContactEmergency,
    Phone,
    Email,
    Key,
    Send,
} from "@mui/icons-material";

const INPUTS_CONFIG = [
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

export default function Register() {
    const { data, post, errors, processing, onHandleChange, Inputs } =
        useFormData(INPUTS_CONFIG);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <>
            <Head title="Registro" />
            <SnackBarComponent open={processing} />

            <form onSubmit={submit} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Inputs.map((input) => (
                        <MultiInput
                            key={input.id}
                            input={input}
                            error={errors[input.id]}
                            value={data[input.id]}
                            onHandleChange={onHandleChange}
                        />
                    ))}
                </div>

                <div className="flex justify-between items-end mt-8">
                    <p>
                        Ya tienes un usuario?
                        <Link
                            href={route("login")}
                            className="ml-1 underline text-secondary hover:text-primary"
                        >
                            Click Aqui
                        </Link>
                    </p>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<Send />}
                        onClick={submit}
                        disabled={processing}
                    >
                        Crear usuario
                    </Button>
                </div>
            </form>
        </>
    );
}
