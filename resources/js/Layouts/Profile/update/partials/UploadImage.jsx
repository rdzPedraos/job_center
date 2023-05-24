import React, { useRef } from "react";
import PropTypes from "prop-types";

import { useForm } from "@inertiajs/react";
import { AddCircleOutline, Person } from "@mui/icons-material";
import { useEffect } from "react";

function UploadImage({ img }) {
    const fileRef = useRef();
    const { setData, data, post, errors } = useForm({ image: null });

    useEffect(() => {
        if (data.image) {
            post(route("auth.upload.image"), {
                preserveScroll: true,
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

                {img ? (
                    <img
                        className="w-full h-full rounded-full object-cover object-center"
                        src={"storage/" + img}
                        alt="Imágen de perfil"
                    />
                ) : (
                    <div className="w-full h-full rounded-full grid place-items-center bg-gray-300">
                        <Person sx={{ fontSize: "100px", color: "white" }} />
                    </div>
                )}

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
    img: PropTypes.string,
};

export default UploadImage;
