import React from "react";
import PropTypes from "prop-types";
import {
    Button,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useTheme,
} from "@mui/material";

const NavItem = ({ item }) => {
    const theme = useTheme();
    const textColor = "text.primary";
    const iconSelectedColor = "primary.main";

    return (
        <ListItemButton
            selected={item.selected}
            sx={{
                "&:hover": {
                    bgcolor: "rgb(var(--primary-color), .1)",
                },
                "&.Mui-selected": {
                    borderRight: `2px solid rgb(var(--primary-color))`,
                    color: "rgb(var(--primary-color))",
                    bgcolor: "rgb(var(--primary-color), .1)",
                    "&:hover": {
                        bgcolor: "rgb(var(--primary-color), .2)",
                    },
                },
            }}
        >
            <ListItemIcon sx={{ minWidth: 30 }}>
                <item.icon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText primary={item.label} />
        </ListItemButton>
    );
};

NavItem.propTypes = {};

export default NavItem;
