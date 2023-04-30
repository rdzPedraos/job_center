import React from "react";

import utilInput from "@/Components/form/utilInput";
import { getInputs } from "@/Config/userForm";

import { Button } from "@mui/material";
import { LockResetOutlined } from "@mui/icons-material";

function PasswordUpdate() {
    const { processing, handleSubmit, inputs } = utilInput(
        getInputs("updatePassword", false),
        {},
        route("password.update"),
        "put",
        true
    );

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-5">{Object.values(inputs)}</div>
            <div className="float-right mt-5">
                <Button type="submit" variant="contained" disabled={processing}>
                    <LockResetOutlined />
                    <span className="ml-1">Cambiar contraseña</span>
                </Button>
            </div>
        </form>
    );
}

export default PasswordUpdate;
