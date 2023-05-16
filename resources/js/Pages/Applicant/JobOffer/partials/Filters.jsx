import React, { useContext } from "react";

import { JobOfferFiltersContext } from "@/Context/FilterContext";

import { Button } from "@mui/material";
import { HighlightOff } from "@mui/icons-material";

function Filters() {
    const { filters, inputs, cleanFilters } = useContext(
        JobOfferFiltersContext
    );

    return (
        <>
            <div className="flex justify-between mb-5">
                <p className="font-bold text-3xl">Filtros</p>
                {
                    //Si NO es cierto que todos los filtros están vacios.
                    !Object.values(filters).every((value) => value === "") && (
                        <Button onClick={cleanFilters}>
                            Limpiar filtros <HighlightOff className="ml-1" />
                        </Button>
                    )
                }
            </div>

            <div className="flex flex-col gap-5">
                <p className="text-xl">Area</p>
                {inputs.faculty}
                {inputs.academic_program}

                <p className="text-xl">Salario</p>
                {inputs.salary}

                {/* <p className="text-xl">Experiencia Requerida</p>
                {inputs.laboral_experience}

                <p className="text-xl">Rango académico</p>
                {inputs.academic_experience} */}

                <p className="text-xl">Tipo de contrato</p>
                {inputs.vinculation_type}

                <p className="text-xl">Jornada</p>
                {inputs.dedication_time}
            </div>
        </>
    );
}

export default Filters;
