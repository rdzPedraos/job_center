import React from "react";
import PropTypes from "prop-types";

import { getInputs } from "@/Config/userForm";
import { useFormData } from "@/Hooks/useFormData";
import MultiInput from "@/Components/form/MultiInput";
import { useState } from "react";
import { Button } from "@mui/material";

function ProfileUpdate({ previusData }) {
    const [editMode, setEditMode] = useState(false);
    const { inputs, data, errors, handleSubmit, processing, handleChangeInp } =
        useFormData(
            getInputs("updateProfile"),
            previusData,
            route("login"),
            "post"
        );

    const handleEditMode = () => setEditMode((prev) => !prev);

    return (
        <form onSubmit={handleSubmit} className="relative">
            <div className="absolute -top-16 right-0">
                <Button
                    onClick={handleEditMode}
                    variant="contained"
                    disabled={processing}
                >
                    {editMode ? "Guardar" : "Editar"}
                </Button>
            </div>
            <div className="w-full grid grid-cols-2 gap-5">
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
        </form>
    );
}

ProfileUpdate.propTypes = {
    previusData: PropTypes.array,
};

export default ProfileUpdate;
