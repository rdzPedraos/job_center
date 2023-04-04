import React, { useState } from "react";
import PropTypes from "prop-types";

import { BiografyInputs } from "@/Config/applicantForm";

import utilInput from "@/Components/form/utilInput";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ArrowBack, EditOutlined } from "@mui/icons-material";

function Biografy({ applicant, className }) {
    const [showDialog, setShowDialog] = useState(false);

    const { inputs, handleSubmit, processing } = utilInput(
        BiografyInputs,
        applicant,
        route("applicant.update"),
        "patch"
    );

    const handlePreSubmit = (e) => {
        e.preventDefault();
        handleSubmit(e, () => setShowDialog(false));
    };

    return (
        <section className={className}>
            <div className="float-right">
                <Button onClick={() => setShowDialog(true)}>
                    <EditOutlined />
                </Button>
            </div>

            <h3 className="text-xl text-secondary font-bold mb-4">
                {applicant.biografy_title}
            </h3>
            <p className="font-light">{applicant.biografy_content}</p>

            <Dialog
                open={showDialog}
                onClose={() => setShowDialog(false)}
                fullWidth
            >
                <DialogTitle>
                    <div className="flex">
                        <Button onClick={() => setShowDialog(false)}>
                            <ArrowBack />
                        </Button>
                        <div>
                            <h2>Rellena la información</h2>
                            <p className="text-secondary text-sm">
                                Describenos tús aptitudes aquí abajo!
                            </p>
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handlePreSubmit}>
                        <div className="grid gap-5 py-5">
                            {Object.values(inputs)}
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={processing}
                            >
                                Guardar
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
}

Biografy.propTypes = {
    applicant: PropTypes.object,
};

export default Biografy;
