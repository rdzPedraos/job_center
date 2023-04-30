import React, { useContext } from "react";
import PropTypes from "prop-types";

import { JobOfferFiltersContext } from "@/Context/FilterContext";

import AreaFilter from "./AreaFilter";
import SalaryFilter from "./SalaryFilter";
import ExperienceFilter from "./ExperienceFilter";
import ContractTypeFilter from "./ContractTypeFilter";
import CleanFilters from "./CleanFilters";
import { Button } from "@mui/material";

function Filters() {
    const { filters, onSubmit } = useContext(JobOfferFiltersContext);

    return (
        <>
            <div className="flex justify-between mb-5">
                <p className="font-bold text-3xl">Filtros</p>
                {
                    //Si NO es cierto que todos los filtros están vacios.
                    !Object.values(filters).every((value) => value === "") && (
                        <CleanFilters />
                    )
                }
            </div>

            <div className="flex flex-col gap-5">
                <AreaFilter />
                <SalaryFilter />
                <ExperienceFilter />
                <ContractTypeFilter />

                <form onSubmit={onSubmit}>
                    <Button variant="contained" type="submit">
                        Enviar
                    </Button>
                </form>
            </div>
        </>
    );
}

Filters.propTypes = {};

export default Filters;
