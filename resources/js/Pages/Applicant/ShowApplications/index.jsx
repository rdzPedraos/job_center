import { Head } from "@inertiajs/react";
import React from "react";

export default function SeePostulations({ participant }) {
    return (
        <>
            <Head title="Mis postulaciones" />
            Mis postulaciones
            {JSON.stringify(participant)}
        </>
    );
}
