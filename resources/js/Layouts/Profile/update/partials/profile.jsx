import React from "react";
import PropTypes from "prop-types";

import utilInput from "@/Components/form/utilInput";
import { getInputs } from "@/Config/userForm";

import { Button } from "@mui/material";
import { Save } from "@mui/icons-material";

function ProfileUpdate({ user, documentTypes }) {
    const { processing, inputs, handleSubmit } = utilInput(
        getInputs("updateProfile"),
        { ...user, documentTypes },
        route("profile.update"),
        "patch"
    );

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-5">{Object.values(inputs)}</div>

            <div className="flex justify-center mt-5">
                <Button type="submit" disabled={processing}>
                    <span className="flex items-center">
                        <Save style={{ marginRight: "5px" }} />
                        Guardar
                    </span>
                </Button>
            </div>
        </form>
    );
}

ProfileUpdate.propTypes = {
    user: PropTypes.object,
    documentTypes: PropTypes.array,
};

export default ProfileUpdate;
