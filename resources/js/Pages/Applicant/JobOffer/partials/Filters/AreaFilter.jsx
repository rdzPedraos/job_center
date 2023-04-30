import React, { useContext } from "react";
import { JobOfferFiltersContext } from "@/Context/FilterContext";

function AreaFilter() {
    const {
        inputs: { faculty, academic_program },
    } = useContext(JobOfferFiltersContext);

    return (
        <>
            <p className="text-xl">Area</p>
            <form className="flex flex-col gap-5">
                {faculty}
                {academic_program}
            </form>
        </>
    );
}

export default AreaFilter;
