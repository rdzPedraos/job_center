import React, { useContext } from "react";

import { JobOfferFiltersContext } from "@/Context/FilterContext";

import { Clear } from "@mui/icons-material";

function Search() {
    const {
        inputs: { title },
        filters,
        setFilters,
    } = useContext(JobOfferFiltersContext);

    return (
        <div className="relative">
            {title}

            {filters.title && (
                <div
                    className="grid absolute top-0 right-0 h-full pr-3 place-items-center cursor-pointer"
                    onClick={() => setFilters({ ...filters, title: "" })}
                >
                    <Clear />
                </div>
            )}
        </div>
    );
}

export default Search;
