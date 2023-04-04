import UploadFile from "@/Components/form/UploadFile";
import PropTypes from "prop-types";
import React from "react";

function UploadCv({ url }) {
    console.log(url);
    return (
        <div className="bg-white py-7 px-5 shadow-lg rounded-md">
            <p className="text-xl text-primary font-bold mb-4">Sube tú CV</p>
            <p className="font-light mb-4">
                ¿Sientes que tienes información relevante para agregar? <br />{" "}
                Por favor, sube aquí tú hoja de vida
            </p>

            <UploadFile
                text="Cargar hoja de vida"
                route={route("applicant.cv.upload")}
                method="post"
            />

            {url && (
                <a
                    href={route("applicant.cv.download")}
                    className="italic font-light underline mx-auto"
                >
                    Ver hoja de vida
                </a>
            )}
        </div>
    );
}

UploadCv.propTypes = {
    url: PropTypes.string,
};

export default UploadCv;
