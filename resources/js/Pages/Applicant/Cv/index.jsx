import React from "react";
import { Head } from "@inertiajs/react";

import Biografy from "./partials/Biografy";
import AcademicStudies from "./partials/AcademicStudies";
import BasicInformation from "./partials/BasicInformation";
import ProfessionalExperience from "./partials/ProfessionalExperience";

import BoxComponent from "@/Components/main/Box";
import VisualizeFile from "@/Components/VisualizeFile";
import TitleComponent from "@/Components/main/Title";

export default function Cv({ applicant, experience, academicStudies, cities }) {
    return (
        <>
            <Head title="Hoja de vida" />

            <div
                className="
                    md:w-5/6 lg:w-5/6 xl:w-2/3 mx-auto
                    grid lg:grid-cols-[5fr_2fr] gap-5
                "
            >
                <BoxComponent className="lg:px-20 lg:py-10">
                    <BasicInformation />
                    <Biografy applicant={applicant} className="mt-16 mb-8" />
                    <ProfessionalExperience
                        experiences={experience}
                        cities={cities}
                    />
                    <AcademicStudies academicStudies={academicStudies} />
                </BoxComponent>

                <div>
                    <BoxComponent>
                        <TitleComponent Type="h2">Sube tú CV</TitleComponent>

                        <p className="font-light mb-4">
                            ¿Sientes que tienes información relevante para
                            agregar? <br /> Por favor, sube aquí tú hoja de vida
                        </p>

                        <VisualizeFile
                            fileUrl={
                                applicant.cv_url &&
                                route("applicant.cv.download")
                            }
                            upload={route("applicant.cv.upload")}
                            name={
                                applicant.cv_url
                                    ? "HOJA DE VIDA"
                                    : "CARGAR HOJA DE VIDA"
                            }
                        />
                    </BoxComponent>
                </div>
            </div>
        </>
    );
}
