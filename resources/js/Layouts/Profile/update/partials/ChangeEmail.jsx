import utilInput from "@/Components/form/utilInput";
import { getInputs } from "@/Config/userForm";
import { Send } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function ChangeEmail({ user }) {
    console.log(user);
    const { processing, handleSubmit, Inputs } = utilInput(
        getInputs("updateEmail", false),
        { ...user },
        route("profile.update"),
        "put"
    );

    return (
        <div>
            <p className="text-center italic mb-5 text-gray-400">
                "Un correo actualizado, una cuenta protegida. La clave está en
                tus manos." - ChatGPT
            </p>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-[1fr_auto]">
                    {Object.values(Inputs)}
                    <Button type="submit" variant="text" disabled={processing}>
                        <Send />
                    </Button>
                </div>

                {user.email_verified_at === null && (
                    <p>Tú correo electrónico aún no ha sido validado!!</p>
                )}
            </form>
        </div>
    );
}

export default ChangeEmail;
