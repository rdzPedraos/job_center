import React, { useState } from "react";
import PropTypes from "prop-types";

import { LaboralExperienciesInputs } from "@/Config/applicantForm";
import utilInput from "@/Components/form/utilInput";

import TimelineComponent from "@/Components/TimelineComponent";
import ShortText from "@/Components/main/ShortText";

import { ArrowBack, EditOutlined } from "@mui/icons-material";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

function ProfessionalExperience({ experiences }) {
    const [showDialog, setShowDialog] = useState(false);
    const { inputs, handleSubmit, processing, setData, data, errors } =
        utilInput(
            LaboralExperienciesInputs,
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

    const items = experiences.map((exp) => (
        <div>
            <div className="absolute right-0">
                <Button onClick={() => handleDialog(true, exp)}>
                    <EditOutlined />
                </Button>
            </div>
            <p className="text-md">{exp.position}</p>
            <p className="text-secondary text-sm mb-2">{exp.company_name}</p>
            <ShortText
                text={exp.description}
                className="text-sm font-light mb-2"
            />
            <p className="text-sm text-secondary opacity-50">
                {exp.start_date} - {exp.end_date}
            </p>
        </div>
    ));

    items.push(
        <p
            className="text-md text-primary hover:underline cursor-pointer mb-0"
            onClick={() => handleDialog(true, {})}
        >
            Añadir una nueva experiencia laboral
        </p>
    );

    return (
        <section>
            <h3 className="text-xl text-secondary font-bold mb-4">
                Experiencia Profesional
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

ProfessionalExperience.propTypes = {
    experiences: PropTypes.arrayOf(PropTypes.object),
};

export default ProfessionalExperience;
