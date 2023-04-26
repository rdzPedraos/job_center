import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

import utilInput from "@/Components/form/utilInput";
import { getInputs } from "@/Config/userForm";

import { Edit, Send } from "@mui/icons-material";
import { Button } from "@mui/material";

function ChangeEmail({ user }) {
    const { status } = usePage().props.flash;

    const { processing, inputs, handleSubmit } = utilInput(
        getInputs("updateEmail", false),
        { ...user },
        route("profile.update"),
        "patch"
    );

    return (
        <section className="grid gris-rows-3 gap-5">
            <form onSubmit={handleSubmit} className="relative">
                {Object.values(inputs)}

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

                <p className="mt-2 text-sm text-justify">
                    {status === "verification-link-sent" ? (
                        <span className="text-primary">
                            Se ha enviado un link de verificación, ingresa a tú
                            correo para acceder a él, y valida tú email.
                        </span>
                    ) : (
                        user.email_verified_at === null && (
                            <>
                                <span className="text-error mr-1">
                                    Tú correo electrónico aún no ha sido
                                    validado,
                                </span>
                                recuerda que el correo es nuestro medio de
                                comunicación, por él te notificaremos en
                                cualquier proceso.
                                <Link
                                    as="button"
                                    href={route("verification.send")}
                                    method="post"
                                    className="text-primary hover:text-secondary font-bold"
                                >
                                    Clic acá para validar
                                </Link>
                            </>
                        )
                    )}
                </p>
            </form>
            <div>
                <img
                    src="/storage/img/notification-email.png"
                    className="h-80 m-auto"
                />

                <p className="text-center italic text-gray-400">
                    "Un correo actualizado, una cuenta protegida. La clave está
                    en tus manos." - ChatGPT
                </p>
            </div>
        </section>
    );
}

export default ChangeEmail;
