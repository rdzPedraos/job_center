import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import SnackBarComponent from "@/Components/SnackBar";
import { Send } from "@mui/icons-material";
import { Alert, Button } from "@mui/material";
import { getInputs } from "@/Config/userForm";
import utilInput from "@/Components/form/utilInput";

export default function ForgotPassword({ status }) {
    const { processing, handleSubmit, inputs } = utilInput(
        getInputs("forgotPassword"),
        {},
        route("password.email"),
        "post"
    );

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

            <form onSubmit={handleSubmit}>
                {Object.values(inputs)}

                <div className="flex float-right gap-4 mt-4">
                    <Link href={route("login")}>
                        <Button>Volver</Button>
                    </Link>

                    <Button
                        disabled={processing}
                        onClick={handleSubmit}
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
