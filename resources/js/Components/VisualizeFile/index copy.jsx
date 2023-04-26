import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Icons } from "./documentIcons";

import { Upload, UploadFile } from "@mui/icons-material";
import { useState } from "react";
import { Events, uploadFiles } from "./upload";

function VisualizeFile({
    url,
    name,
    type,
    upload,
    className,
    onClick = () => {},
}) {
    const fileInputRef = useRef();
    const [drag, setDrag] = useState(false);
    const uploadF = uploadFiles(route("applicant.cv.upload"), "post");

    if (name == undefined) name = "CARGUE UN ARCHIVO";
    const Icon = Icons[type];

    return (
        <>
            <div
                className={
                    "group/parent relative overflow-hidden rounded-lg cursor-pointer " +
                    "bg-white text-gray-600 border-[1px] " +
                    className
                }
            >
                <div className="group/content" {...Events(setDrag, uploadF)}>
                    {/* Caratula o preview del archivo */}
                    <div className="relative h-[170px]">
                        {/* Estado en drag and drop */}
                        {drag && (
                            <div className="absolute w-full h-full grid place-items-center text-white bg-black bg-opacity-40">
                                <UploadFile fontSize="large" />
                                <div className="absolute w-[95%] h-[95%] border-2 border-dashed border-white" />
                            </div>
                        )}

                        {/* Imágen para previsualizar. */}
                        <img
                            className="w-full h-full object-cover object-top"
                            src="storage\profile-img\trevor.jpg"
                            alt={
                                url ? "Imágen de archivo " + name : "Sin imágen"
                            }
                        />
                    </div>

                    {/* Pie de página, relaciona el tipo de archivo (documento), y el nombre */}
                    <div
                        className="
                    px-3 py-5 flex uppercase font-bold
                    group-hover/content:bg-base_white
                    group-active/content:bg-blue-100 group-active/content:text-blue-600"
                    >
                        <Icon />
                        <span className="ml-2 overflow-hidden text-ellipsis select-none">
                            {name}
                        </span>
                    </div>
                </div>

                {upload && (
                    <>
                        <button
                            className="hidden absolute top-2 right-2 text-sm py-1 px-2 rounded-md bg-white group-hover/parent:block hover:text-blue-500 active:bg-base_white"
                            onClick={() => fileInputRef.current.click()}
                        >
                            <Upload fontSize="small" />
                            Subir pdf
                        </button>
                    </>
                )}
            </div>

            {upload && (
                <form>
                    <input
                        type="file"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={(e) => uploadF(Array.from(e.target.files))}
                    />
                </form>
            )}
        </>
    );
}

VisualizeFile.propTypes = {};

export default VisualizeFile;
