import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { useFormData } from "@/Hooks/useFormData";
import MultiInput from "@/Components/form/MultiInput";
import { Button } from "@mui/material";
import { Email, Key } from "@mui/icons-material";
import SnackBarComponent from "@/Components/alerts/SnackBar";

const INPUTS_CONFIG = [
    {
        id: "token",
        type: null,
    },
    {
        id: "email",
        label: "Email",
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
        label: "Confirma la contraseña",
        type: "password",
        icon: Key,
    },
];

export default function ResetPassword({ token, email }) {
    const { data, onHandleChange, post, processing, errors, Inputs } =
        useFormData(INPUTS_CONFIG, { token, email });

    const submit = (e) => {
        e.preventDefault();
        post(route("password.store"));
    };

    return (
        <>
            <Head title="Restaurar contraseña" />
            <SnackBarComponent open={processing} />

            <form onSubmit={submit}>
                <div className="flex flex-col gap-9 my-12">
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
                <Button
                    sx={{ float: "right" }}
                    variant="contained"
                    onClick={submit}
                    disabled={processing}
                >
                    Restaurar contraseña
                </Button>
            </form>
        </>
    );
}

ResetPassword.layout = (content) => (
    <GuestLayout children={content} width="w-full sm:max-w-lg" />
);
