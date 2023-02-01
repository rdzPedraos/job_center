import { Head, Link } from "@inertiajs/react";

import { CREATE_USER_INPUTS } from "../../models/CreateUserInput.enum";
import MultiInput from "@/Components/form/MultiInput";
import { useFormData } from "@/Hooks/useFormData";

import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

import SnackBarComponent from "@/Components/alerts/SnackBar";

export default function Register() {
    const { data, post, errors, processing, onHandleChange, Inputs } =
        useFormData(CREATE_USER_INPUTS);

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
                        endIcon={<SendIcon />}
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
