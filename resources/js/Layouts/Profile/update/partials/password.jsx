import React from "react";
import utilInput from "@/Components/form/utilInput";
import { Button } from "@mui/material";
import { getInputs } from "@/Config/userForm";

function PasswordUpdate() {
    const { processing, handleSubmit, Inputs } = utilInput(
        getInputs("updatePassword", false),
        {},
        route("password.update"),
        "put"
    );

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-5">{Object.values(Inputs)}</div>
            <div className="float-right mt-5">
                <Button type="submit" variant="contained" disabled={processing}>
                    Cambiar contraseña
                </Button>
            </div>
        </form>
    );
}

export default PasswordUpdate;
