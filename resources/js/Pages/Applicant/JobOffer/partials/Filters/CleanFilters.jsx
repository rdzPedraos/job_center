import React from "react";
import PropTypes from "prop-types";
import { HighlightOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useContext } from "react";
import { JobOfferFiltersContext } from "@/Context/FilterContext";

function CleanFilters() {
    const { cleanData } = useContext(JobOfferFiltersContext);

    return (
        <Button onClick={cleanData}>
            Limpiar filtros <HighlightOff className="ml-1" />
        </Button>
    );
}

CleanFilters.propTypes = {};

export default CleanFilters;
