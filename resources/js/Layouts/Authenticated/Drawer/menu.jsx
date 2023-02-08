import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material";
import {
    Drafts,
    ExpandLess,
    ExpandMore,
    Inbox,
    Send,
    StarBorder,
} from "@mui/icons-material";
import NavItem from "./NavItem";

const MenuSection = (props) => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                </ListSubheader>
            }
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(() => (
                <NavItem
                    item={{
                        label: "Sent mail",
                        icon: Send,
                    }}
                />
            ))}
            <NavItem
                item={{
                    selected: true,
                    label: "Sent mail",
                    icon: Send,
                }}
            />
            <NavItem
                item={{
                    label: "Drafts",
                    icon: Drafts,
                }}
            />
            <NavItem
                item={{
                    label: "Inbox",
                    icon: Inbox,
                }}
            />

            {/* <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <Inbox />
                </ListItemIcon>
                <ListItemText primary="" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton> */}

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
};

MenuSection.propTypes = {};

export default MenuSection;
