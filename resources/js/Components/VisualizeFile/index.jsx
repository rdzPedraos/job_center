import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { uploadFiles } from "./upload";
import { Icons } from "./documentIcons";

import { Upload, UploadFile } from "@mui/icons-material";

function VisualizeFile({
    fileUrl,
    upload,

    name,
    type,
    className,
}) {
    const fileInputRef = useRef();
    const canvasRef = useRef();
    const [imgUrl, setImgUrl] = useState(null);
    const { drag, dragAndDropEvents, errors, setData, data } = uploadFiles(
        upload,
        "post",
        "file",
        false
    );

    useEffect(() => {
        if (fileUrl) {
            const document = PDFJS.getDocument({ url: fileUrl });
            document.promise.then(async (doc) => {
                const page = await doc.getPage(1);
                const vwport = await page.getViewport({ scale: 1 });

                const canvas = canvasRef.current;
                canvas.width = vwport.width;
                canvas.height = vwport.height;

                await page.render({
                    canvasContext: canvas.getContext("2d"),
                    viewport: vwport,
                }).promise;

                setImgUrl(canvas.toDataURL("image/png"));
            });
        }
    }, [data]);

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
                <canvas className="hidden" ref={canvasRef} />
                <div
                    className="group/content"
                    onDoubleClick={() => window.open(fileUrl)}
                    {...dragAndDropEvents}
                >
                    {/* Caratula o preview del archivo */}
                    <div className="relative h-[170px]">
                        {/* Estado en drag and drop */}
                        {(drag || imgUrl === undefined) && (
                            <div className="absolute w-full h-full grid place-items-center text-white bg-black bg-opacity-40">
                                <UploadFile fontSize="large" />
                                <div className="absolute w-[95%] h-[95%] border-2 border-dashed border-white" />
                            </div>
                        )}

                        {/* Imágen para previsualizar. */}
                        <img
                            className="w-full h-full object-cover object-top"
                            src={imgUrl}
                            alt={imgUrl ? "Imágen de archivo " + name : ""}
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
                            className="hidden absolute top-2 right-2 text-sm py-1 px-2 rounded-md bg-white shadow group-hover/parent:block hover:text-blue-500 active:bg-base_white"
                            onClick={() => fileInputRef.current.click()}
                        >
                            <Upload fontSize="small" />
                            Subir pdf
                        </button>
                    </>
                )}
            </div>

            {upload && (
                <>
                    <input
                        type="file"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={(e) => {
                            if (e.target.files.length > 0) {
                                setData("file", e.target.files[0]);
                            }
                        }}
                    />
                    <p>{errors.file}</p>
                </>
            )}
        </>
    );
}

VisualizeFile.propTypes = {};

export default VisualizeFile;
