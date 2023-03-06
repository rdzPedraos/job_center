import { Button } from "@mui/material";
import { useState } from "react";
import PasswordUpdate from "./partials/password";
import ProfileUpdate from "./partials/profile";

export default function UpdateProfileComponent({ user, documentTypes }) {
    return (
        <div className="min-h-full p-5 lg:w-[800px] lg:p-10">
            <div className="grid place-items-center mb-10">
                <img
                    className="w-52 h-52 rounded-full object-cover object-center"
                    src="/storage/profile-img/trevor.jpg"
                />
            </div>

            <ProfileUpdate previusData={{ ...user, documentTypes }} />

            <hr className="my-5" />

            <PasswordUpdate />
        </div>
    );
}
