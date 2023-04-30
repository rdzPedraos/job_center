import React, { createContext } from "react";
import { usePage } from "@inertiajs/react";

import { INPUTS } from "@/Config/offerFilterForm";
import utilInput from "@/Components/form/utilInput";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

export const JobOfferFiltersContext = createContext();
export function JobOfferFiltersProvider({ children }) {
    const [isClean, setIsClean] = useState(false);
    const { filters, errors } = usePage().props;
    const { inputs, data, setData, handleSubmit } = utilInput(
        INPUTS,
        filters,
        route("applicant.job.offer.index"),
        "get"
    );

    /* useEffect(() => {
        if (isClean) {
            handleSubmit();
            setIsClean(false);
        }
    }, [data, isClean]); */

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(
                route("applicant.job.offer.filter")
            );
            console.log(response);
        };

        fetchData();
    }, []);

    const cleanData = () => {
        setIsClean(true);
        setData({});
    };

    for (const id in errors) {
        const str = () => (
            <>
                <b>{id}: </b>
                <span>{errors[id]}</span>
            </>
        );
        toast.error(str(), {
            position: "bottom-left",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
        });
    }

    return (
        <JobOfferFiltersContext.Provider
            value={{
                inputs,
                filters: data,
                onSubmit: handleSubmit,
                cleanData,
            }}
        >
            {children}
        </JobOfferFiltersContext.Provider>
    );
}
