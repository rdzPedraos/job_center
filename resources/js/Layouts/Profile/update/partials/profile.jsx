import React from "react";
import PropTypes from "prop-types";

import { getInputs } from "@/Config/userForm";
import { Button } from "@mui/material";
import utilInput from "@/Components/form/utilInput";
import { Save, Settings } from "@mui/icons-material";

function ProfileUpdate({ user, documentTypes }) {
    const { processing, inputs, handleSubmitWithEditMode, isDisabled } =
        utilInput(
            getInputs("updateProfile"),
            { ...user, documentTypes },
            route("profile.update"),
            "patch",
            false,
            true
        );

    return (
        <form onSubmit={handleSubmitWithEditMode}>
            <div className="grid gap-5">{Object.values(inputs)}</div>

            <div className="flex justify-center mt-5">
                <Button
                    type="submit"
                    variant={isDisabled ? "text" : "contained"}
                    disabled={processing}
                >
                    <span className="flex items-center">
                        {isDisabled ? (
                            <>
                                <Settings style={{ marginRight: "5px" }} />
                                Editar
                            </>
                        ) : (
                            <>
                                <Save style={{ marginRight: "5px" }} />
                                Guardar
                            </>
                        )}
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
