import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import PropTypes from "prop-types";

function DateInputComponent({
    id,
    value,
    error,
    onHandleChange,
    ...otherProps
}) {
    const changeInput = (val) => {
        console.log(val);
        onHandleChange({
            target: {
                type: "date",
                name: id,
                value: `${val.$y}-${val.$M + 1}-${val.$D}`,
            },
        });
    };

    return (
        <DatePicker
            value={value ? dayjs(value) : null}
            onChange={changeInput}
            componentsProps={{
                textField: {
                    name: id,
                    error: !!error,
                    helperText: error,
                    fullWidth: true,
                    ...otherProps,
                },
            }}
        />
    );
}

DateInputComponent.propTypes = {};

export default DateInputComponent;
