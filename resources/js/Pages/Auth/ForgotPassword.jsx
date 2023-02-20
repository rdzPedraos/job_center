import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import SnackBarComponent from "@/Components/SnackBar";
import MultiInput from "@/Components/form/MultiInput";
import { Email, MarkEmailRead, Send } from "@mui/icons-material";
import { Alert, Button } from "@mui/material";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    return (
        <>
            <Head title="Recuperar contraseña" />
            <SnackBarComponent open={processing} />

            {status ? (
                <Alert severity="success" sx={{ marginY: "1.5rem" }}>
                    {status}
                </Alert>
            ) : (
                <div className="my-6 text-sm text-secondary text-justify">
                    Has olvidado tú contraseña? No hay problema! Nosotros te
                    enviaremos por correo electrónico un link de acceso para que
                    actualices tú contraseña.
                </div>
            )}

            <form onSubmit={submit}>
                <MultiInput
                    input={{
                        id: "email",
                        label: "Email",
                        icon: Email,
                    }}
                    error={errors["email"]}
                    value={data["email"]}
                    onHandleChange={onHandleChange}
                />

                <div className="flex float-right gap-4 mt-4">
                    <Link href={route("login")}>
                        <Button>Volver</Button>
                    </Link>

                    <Button
                        disabled={processing}
                        onClick={submit}
                        variant="contained"
                        size="medium"
                        endIcon={<Send />}
                    >
                        Enviar correo
                    </Button>
                </div>
            </form>
        </>
    );
}

ForgotPassword.layout = (content) => (
    <GuestLayout children={content} width="w-full sm:max-w-lg" />
);
