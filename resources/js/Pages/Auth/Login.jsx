import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { LoginOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import SnackBarComponent from "@/Components/SnackBar";
import { getInputs } from "@/Config/userForm";
import utilInput from "@/Components/form/utilInput";

//status
export default function Login({ canResetPassword }) {
    const { processing, handleSubmit, Inputs } = utilInput(
        getInputs("login"),
        {},
        route("login"),
        "post"
    );

    return (
        <>
            <Head title="Ingresar" />
            <SnackBarComponent open={processing} />

            <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col gap-9">
                    {Inputs.email}
                    {Inputs.password}
                </div>

                <div className="flex justify-between items-center my-4">
                    {Inputs.remember}

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-secondary hover:text-primary"
                        >
                            Olvidaste tú contraseña?
                        </Link>
                    )}
                </div>

                <Button
                    fullWidth
                    sx={{ marginTop: "1rem" }}
                    variant="contained"
                    onClick={handleSubmit}
                    startIcon={<LoginOutlined />}
                    disabled={processing}
                    size="large"
                >
                    Ingresar
                </Button>

                <p className="mt-6 text-sm">
                    Puedes
                    <Link
                        href={route("register")}
                        className="underline text-secondary hover:text-primary ml-1"
                    >
                        crear una cuenta aquí
                    </Link>
                </p>
            </form>
        </>
    );
}

Login.layout = (content) => (
    <GuestLayout children={content} width="w-full sm:max-w-lg" />
);
