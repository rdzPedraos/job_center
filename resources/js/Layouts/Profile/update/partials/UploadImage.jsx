import React, { useRef } from "react";
import PropTypes from "prop-types";

import { useForm } from "@inertiajs/react";
import { AddCircleOutline } from "@mui/icons-material";
import { useEffect } from "react";

function UploadImage({ url }) {
    const fileRef = useRef();
    const { setData, data, post, errors } = useForm({ image: null });

    useEffect(() => {
        if (data.image) {
            post(route("auth.upload.image"), {
                onSuccess: () => window.location.reload(),
            });
        }
    }, [data.image]);

    return (
        <>
            <div
                onClick={() => fileRef.current.click()}
                className="
                    relative w-52 h-52 m-auto 
                    rounded-full border-primary border-4 
                    cursor-pointer hover:opacity-90
                "
            >
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileRef}
                    onChange={(e) => setData("image", e.target.files[0])}
                />

                <img
                    className="w-full h-full rounded-full object-cover object-center"
                    src={"storage/" + url}
                />

                <AddCircleOutline
                    className="absolute right-2 bottom-2 rounded-full bg-primary text-white"
                    fontSize="large"
                />
            </div>

            <p className="text-center text-error font-bold">{errors.image}</p>
        </>
    );
}

UploadImage.propTypes = {
    url: PropTypes.string,
};

export default UploadImage;
