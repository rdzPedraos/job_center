import React from "react";
import PropTypes from "prop-types";
import VisualizeFile from "@/Components/VisualizeFile";

function UploadCv() {
    return (
        <div className="bg-white py-7 px-5 shadow-lg rounded-md">
            <p className="text-xl text-primary font-bold mb-4">Sube tú CV</p>
            <p className="font-light mb-4">
                ¿Sientes que tienes información relevante para agregar? <br />{" "}
                Por favor, sube aquí tú hoja de vida
            </p>

            <VisualizeFile
                fileUrl={route("applicant.cv.download")}
                upload={route("applicant.cv.upload")}
            />
        </div>
    );
}

UploadCv.propTypes = {
    url: PropTypes.string,
};

export default UploadCv;
