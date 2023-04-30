import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

import MultiInput from "@/Components/form/MultiInput";
import { getInputs } from "@/Config/userForm";

import { Send } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useFormData } from "@/Hooks/useFormData";
import UnderlineText from "@/Components/main/UnderlineText";

function ChangeEmail({ user }) {
    const [edit, setEdit] = useState(false);
    const { status } = usePage().props.flash;
    const { inputs, data, errors, processing, handleSubmit, handleChangeInp } =
        useFormData(
            getInputs("updateEmail", false),
            { ...user },
            route("profile.update"),
            "patch"
        );

    inputs[0].variant = edit ? "outlined" : "filled";
    inputs[0].onClick = edit ? () => {} : () => setEdit(true);

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(e, () => {
            setEdit(false);
        });
    };

    return (
        <section className="grid gris-rows-3 gap-5">
            <form onSubmit={onSubmit} className="relative">
                <MultiInput
                    input={inputs[0]}
                    error={errors.email}
                    value={data.email}
                    onHandleChange={handleChangeInp}
                />

                {edit && (
                    <div className="absolute right-0 top-2">
                        <Button
                            type="submit"
                            variant="text"
                            disabled={processing}
                            color="secondary"
                        >
                            <Send />
                        </Button>
                    </div>
                )}
            </form>

            {user.email_verified_at === null && (
                <p className="text-sm text-justify">
                    {status === "verification-link-sent" ? (
                        <span className="text-primary">
                            Se ha enviado un link de verificación, ingresa a tú
                            correo para acceder a él, y valida tú email.
                        </span>
                    ) : (
                        <>
                            <span className="text-error mr-1">
                                Tú correo electrónico aún no ha sido validado,
                            </span>
                            recuerda que el correo es nuestro medio de
                            comunicación, por él te notificaremos en cualquier
                            proceso.
                            <UnderlineText
                                as="button"
                                method="post"
                                href={route("verification.send")}
                                content="Clic acá para validar"
                            />
                        </>
                    )}
                </p>
            )}

            <div>
                <img
                    src="/storage/img/notification-email.png"
                    className="h-80 m-auto"
                />
            </div>
        </section>
    );
}

export default ChangeEmail;
