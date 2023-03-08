import React from "react";
import PropTypes from "prop-types";

import { getInputs } from "@/Config/userForm";
import { useFormData } from "@/Hooks/useFormData";
import MultiInput from "@/Components/form/MultiInput";
import { useState } from "react";
import { Button } from "@mui/material";

function ProfileUpdate({ user, documentTypes, onFinish }) {
    const [editMode, setEditMode] = useState(false);

    const { inputs, errors, data, processing, handleChangeInp, handleSubmit } =
        useFormData(
            getInputs("updateProfile"),
            { ...user, documentTypes },
            route("profile.update"),
            "patch"
        );

    const handleEditMode = (e) => {
        e.preventDefault();
        if (editMode) {
            handleSubmit(e, onFinish);
        } else setEditMode(true);
    };

    return (
        <form onSubmit={handleEditMode}>
            <div className="grid gap-5">
                {inputs.map((inp) => {
                    const id = inp.id;
                    return (
                        <MultiInput
                            key={id}
                            input={inp}
                            disabled={!editMode}
                            error={errors[id]}
                            value={data[id]}
                            onHandleChange={handleChangeInp}
                        />
                    );
                })}
            </div>

            <div className="flex justify-center mt-5">
                <Button
                    type="submit"
                    variant={editMode ? "contained" : "text"}
                    disabled={processing}
                >
                    {editMode ? "Guardar" : "Editar"}
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
