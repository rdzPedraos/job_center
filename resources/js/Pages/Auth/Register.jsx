import { Head, Link } from "@inertiajs/react";
import SnackBarComponent from "@/Components/SnackBar";

import { getInputs } from "@/Config/userForm";

import { Send } from "@mui/icons-material";
import { Button } from "@mui/material";
import utilInput from "@/Components/form/utilInput";

export default function Register() {
    const { processing, handleSubmit, inputs } = utilInput(
        getInputs("register"),
        {},
        route("register"),
        "post",
        true
    );

    return (
        <>
            <Head title="Registro" />
            <SnackBarComponent open={processing} />

            <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.values(inputs)}
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
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={<Send />}
                        onClick={handleSubmit}
                        disabled={processing}
                    >
                        Crear usuario
                    </Button>
                </div>
            </form>
        </>
    );
}
