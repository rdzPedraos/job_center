import React from "react";
import PropTypes from "prop-types";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";

const CheckboxInputComponent = ({
    id,
    label,
    Icon = FavoriteBorder,
    CheckedIcon = Favorite,
    isChecked,
    onHandleChange,
}) => {
    return (
        <FormControlLabel
            label={label}
            control={
                <Checkbox
                    name={id}
                    icon={<Icon />}
                    checkedIcon={<CheckedIcon />}
                    onChange={onHandleChange}
                    checked={!!isChecked}
                />
            }
        />
    );
};

CheckboxInputComponent.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    Icon: PropTypes.element,
    CheckedIcon: PropTypes.element,
    onHandleChange: PropTypes.func,
};

export default CheckboxInputComponent;
