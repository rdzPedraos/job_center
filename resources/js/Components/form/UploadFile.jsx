import React from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import { useFormData } from "@/Hooks/useFormData";
import { useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";

function UploadFile({
    className,
    route,
    method,
    type = "button",
    text = "Subir archivo",
}) {
    const inputRef = useRef();
    const { handleSubmit, data, setData, errors, progress } = useFormData(
        [{ id: "file" }],
        { file: null },
        route,
        method,
        true
    );

    const handleFileChange = (e) => {
        if (e.target.files) {
            setData("file", e.target.files[0]);
        }
    };

    useEffect(() => {
        if (data.file) {
            handleSubmit(null, () => setData("file", null));
        }
    }, [data]);

    return (
        <div className={className}>
            {progress ? (
                <CircularProgress />
            ) : (
                <>
                    <input
                        type="file"
                        ref={inputRef}
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    {type == "button" && (
                        <>
                            <Button
                                variant="contained"
                                onClick={() => inputRef.current?.click()}
                            >
                                {text}
                            </Button>
                            <p className="mt-4 text-error">{errors.file}</p>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

UploadFile.propTypes = {};

export default UploadFile;
