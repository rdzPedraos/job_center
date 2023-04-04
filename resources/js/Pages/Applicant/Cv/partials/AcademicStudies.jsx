import React, { useState } from "react";
import PropTypes from "prop-types";

import { AcademicStudiesInputs } from "@/Config/applicantForm";
import utilInput from "@/Components/form/utilInput";

import TimelineComponent from "@/Components/TimelineComponent";

import { ArrowBack, EditOutlined } from "@mui/icons-material";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

function AcademicStudies({ academicStudies }) {
    const [showDialog, setShowDialog] = useState(false);
    const { inputs, handleSubmit, processing, setData, data, errors } =
        utilInput(
            AcademicStudiesInputs,
            {},
            route("applicant.update"),
            "patch"
        );

    const handleDialog = (show, item) => {
        if (item) {
            for (const id in errors) {
                delete errors[id];
            }

            setData({
                info_to_update: data.info_to_update,
                ...item,
            });
        }
        setShowDialog(show);
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        handleSubmit(e, () => setShowDialog(false));
    };

    const items = academicStudies.map((degree) => (
        <div>
            <div className="absolute right-0">
                <Button onClick={() => handleDialog(true, degree)}>
                    <EditOutlined />
                </Button>
            </div>
            <p className="text-md">{degree.degree}</p>
            <p className="text-secondary text-sm mb-2">
                {degree.institution_name}
            </p>
            <p className="text-sm text-secondary opacity-50">
                {degree.start_date} - {degree.end_date}
            </p>
        </div>
    ));

    items.push(
        <p
            className="text-md text-primary hover:underline cursor-pointer"
            onClick={() => handleDialog(true, {})}
        >
            Añadir más estudios
        </p>
    );

    return (
        <section>
            <h3 className="text-xl text-secondary font-bold mb-4">
                Mis estudios
            </h3>

            <TimelineComponent items={items} />

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
                    <form onSubmit={_handleSubmit}>
                        <div className="grid gap-5 mt-5">
                            {Object.values(inputs)}

                            <div className="ml-auto flex gap-5">
                                <Button
                                    disabled={processing}
                                    type="submit"
                                    name="action"
                                    value="delete"
                                >
                                    Eliminar
                                </Button>

                                <Button
                                    disabled={processing}
                                    variant="contained"
                                    type="submit"
                                    name="action"
                                    value="save"
                                >
                                    Guardar
                                </Button>
                            </div>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
}

AcademicStudies.propTypes = {
    academicStudies: PropTypes.arrayOf(PropTypes.object),
};

export default AcademicStudies;
