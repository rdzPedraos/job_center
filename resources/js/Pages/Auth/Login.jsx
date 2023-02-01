import SnackBarComponent from "@/Components/alerts/SnackBar";
import MultiInput from "@/Components/form/MultiInput";
import Guest from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Email, Key, LoginOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

const Inputs = {
    email: {
        id: "email",
        label: "Correo electrónico*",
        type: "email",
        icon: Email,
    },
    password: {
        id: "password",
        label: "Contraseña*",
        type: "password",
        icon: Key,
    },
    remember: {
        id: "remember",
        label: "Recuérdame",
        type: "checkbox",
    },
};

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

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
        post(route("login"));
    };

    return (
        <>
            <Head title="Ingresar" />
            <SnackBarComponent open={processing} />

            <form onSubmit={submit}>
                <div className="flex flex-col gap-9">
                    <MultiInput
                        input={Inputs.email}
                        error={errors["email"]}
                        value={data["email"]}
                        onHandleChange={onHandleChange}
                    />

                    <MultiInput
                        input={Inputs.password}
                        error={errors["password"]}
                        value={data["password"]}
                        onHandleChange={onHandleChange}
                    />
                </div>

                <div className="flex justify-between items-center my-4">
                    <MultiInput
                        input={Inputs.remember}
                        error={errors["remember"]}
                        value={data["remember"]}
                        onHandleChange={onHandleChange}
                    />

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-secondary hover:text-primary"
                        >
                            Olvidaste tú contraseña?
                        </Link>
                    )}
                </div>

                <div className="flex flex-col mt-8">
                    <Button
                        variant="contained"
                        onClick={submit}
                        startIcon={<LoginOutlined />}
                        disabled={processing}
                        size="large"
                    >
                        Ingresar
                    </Button>
                </div>

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
    <Guest children={content} width="w-full sm:max-w-lg" />
);
