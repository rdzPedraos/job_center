import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm, usePage } from "@inertiajs/react";

import { USER_INPUTS } from "../../../models/userInputs.enum";
import MultiInput from "@/Components/MultiInput";

import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

export default function Register() {
    USER_INPUTS.document_type_id.options = usePage().props.documentTypes;
    const INPUT_KEYS = Object.keys(USER_INPUTS);

    const { data, setData, post, errors } = useForm(
        Object.fromEntries(INPUT_KEYS.map((key) => [key, ""]))
    );

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Registro" />

            <form onSubmit={submit} className="mt-8">
                <div className="grid grid-cols-2 gap-6">
                    {INPUT_KEYS.map((key) => (
                        <MultiInput
                            key={key}
                            id={key}
                            input={USER_INPUTS[key]}
                            error={errors[key]}
                            value={data[key] ?? ""}
                            onHandleChange={onHandleChange}
                        />
                    ))}
                </div>

                <div className="float-right mt-8">
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        onClick={submit}
                    >
                        Crear usuario
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
