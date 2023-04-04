import React from "react";
import PropTypes from "prop-types";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";

function CheckboxInputComponent({
    id,
    value,
    onHandleChange,
    icon = FavoriteBorder,
    checkedIcon = Favorite,
    ...otherProps
}) {
    const Icon = icon;
    const CheckedIcon = checkedIcon;

    return (
        <FormControlLabel
            {...otherProps}
            control={
                <Checkbox
                    name={id}
                    icon={<Icon />}
                    checkedIcon={<CheckedIcon />}
                    onChange={onHandleChange}
                    checked={!!value}
                />
            }
        />
    );
}

CheckboxInputComponent.propTypes = {
    id: PropTypes.string,
    onHandleChange: PropTypes.func,
    icon: PropTypes.element,
    checkedIcon: PropTypes.element,
};

export default CheckboxInputComponent;
