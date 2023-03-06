import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { Button } from "@mui/material";
import SnackBarComponent from "@/Components/SnackBar";
import { getInputs } from "@/Config/userForm";
import utilInput from "@/Components/form/utilInput";

export default function ResetPassword({ token, email }) {
    const { processing, handleSubmit, Inputs } = utilInput(
        getInputs("resetPassword"),
        { email, token },
        route("password.store"),
        "post"
    );

    return (
        <>
            <Head title="Restaurar contraseña" />
            <SnackBarComponent open={processing} />

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-9 my-12">
                    {Object.values(Inputs)}
                </div>
                <Button
                    sx={{ float: "right" }}
                    variant="contained"
                    onClick={handleSubmit}
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
