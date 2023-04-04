import { Head } from "@inertiajs/react";
import React from "react";
import BasicInformation from "./partials/BasicInformation";
import Biografy from "./partials/Biografy";
import ProfessionalExperience from "./partials/ProfessionalExperience";
import AcademicStudies from "./partials/AcademicStudies";
import UploadCv from "./partials/UploadCv";

export default function Cv({ applicant, experience, academicStudies, cities }) {
    return (
        <>
            <Head title="Hoja de vida" />

            <div className="lg:w-3/4 xl:w-2/3 mx-auto">
                <div className="grid lg:grid-cols-[3fr_1fr] gap-5">
                    <div className="bg-white p-5 lg:py-10 lg:px-20 shadow-lg rounded-md">
                        <BasicInformation />
                        <Biografy
                            applicant={applicant}
                            className="mt-16 mb-8"
                        />
                        <ProfessionalExperience
                            experiences={experience}
                            cities={cities}
                        />
                        <AcademicStudies academicStudies={academicStudies} />
                    </div>
                    <div className="overflow-hidden">
                        <UploadCv url={applicant.cv_url} />
                    </div>
                </div>
            </div>
        </>
    );
}
