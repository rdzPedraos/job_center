import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

function ContractTypeFilter(props) {
    return (
        <>
            <p className="text-xl">Tipo de contrato</p>
            <RadioGroup value="1">
                <FormControlLabel value="1" control={<Radio />} label="OPS" />
                <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="A termino fijo"
                />
            </RadioGroup>

            <p className="text-xl">Tiempo de dedicación</p>
            <RadioGroup value="1">
                <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Jornada Completa"
                />
                <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Medio tiempo"
                />
            </RadioGroup>
        </>
    );
}

ContractTypeFilter.propTypes = {};

export default ContractTypeFilter;
