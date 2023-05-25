import React from "react";
import PropTypes from "prop-types";

import TitleComponent from "@/Components/main/Title";

import Card from "./Card";
import Header from "../JobCard/Header";

import { Diversity1, Style } from "@mui/icons-material";
import TimelineComponent from "@/Components/TimelineComponent";
import { Button } from "@mui/material";

function JobDrawer({ job, setJob }) {
    const request = [];
    const functions = [];

    job.details.forEach((detail) => {
        const { detail_type } = detail;
        const element = <p>{detail.description}</p>;

        if (detail_type == "R") request.push(element);
        else if (detail_type == "F") functions.push(element);
    });

    const onApply = (e) => {
        e.preventDefault();
        axios
            .post(route("applicant.job.offer.store"), { id: job.id })
            .then((data) => {
                setJob((prev) => ({ ...prev, is_registered: true }));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="grid gap-5 relative">
            <Header job={job} />

            {/* Cards con información de las vacantes y el programa */}
            <div className="grid grid-cols-2 gap-5">
                <Card
                    icon={<Diversity1 />}
                    content={
                        <>
                            <p className="font-bold">Vacantes</p>
                            <p className="text-sm lowercase first-letter:uppercase">
                                {job.vacancies +
                                    (job.vacancies > 1
                                        ? " Vacantes"
                                        : " Vacante")}
                            </p>
                        </>
                    }
                />
                <Card
                    icon={<Style />}
                    content={
                        <>
                            <p className="font-bold">Programa</p>
                            <p className="text-sm lowercase first-letter:uppercase">
                                {job.academic_program.name} <br />
                            </p>
                        </>
                    }
                />
            </div>

            <TitleComponent Type="p" className="text-black mb-0">
                Acerca del trabajo
            </TitleComponent>
            <p className="text-justify text-gray-500">{job.description}</p>

            <TitleComponent Type="p" className="text-black mb-0">
                Funciones del cargo
            </TitleComponent>
            {functions.length == 0 ? (
                <p>No se establecieron funciones...</p>
            ) : (
                <TimelineComponent items={functions} />
            )}

            <TitleComponent Type="p" className="text-black mb-0">
                Requisitos del cargo
            </TitleComponent>
            {request.length == 0 ? (
                <p>No se establecieron requisitos para el cargo...</p>
            ) : (
                <TimelineComponent items={request} />
            )}

            <form onSubmit={onApply}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={job.is_registered}
                >
                    {job.is_registered ? "Ya has aplicado" : "aplicar"}
                </Button>
            </form>
        </div>
    );
}

JobDrawer.propTypes = {
    job: PropTypes.object,
    setJob: PropTypes.func,
};

export default JobDrawer;