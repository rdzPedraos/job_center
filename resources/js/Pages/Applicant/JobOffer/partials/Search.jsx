import React, { useContext } from "react";

import { JobOfferFiltersContext } from "@/Context/FilterContext";

import { Button } from "@mui/material";
import { SearchTwoTone } from "@mui/icons-material";

function Search() {
    const {
        inputs: { title },
        onSubmit,
    } = useContext(JobOfferFiltersContext);

    return (
        <form onSubmit={onSubmit}>
            <div className="grid grid-cols-[1fr_auto] gap-5">
                {title}

                <Button
                    variant="contained"
                    type="submit"
                    className="flex gap-2"
                >
                    <SearchTwoTone />
                    BUSCAR
                </Button>
            </div>
        </form>
    );
}

export default Search;
