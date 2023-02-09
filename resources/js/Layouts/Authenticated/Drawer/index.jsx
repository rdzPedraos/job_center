import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import MenuSection from "./menu";
import ApplicationLogo from "@/Components/ApplicationLogo";

const MainDrawer = ({ open, handleDrawerToggle, className }) => {
    const theme = useTheme();
    const matchMobileMQ = useMediaQuery(theme.breakpoints.down("lg"));

    const drawerContent = useMemo(() => <MenuSection />, []);
    const drawerHeader = useMemo(
        () => (
            <div className="my-4 w-64">
                <ApplicationLogo imgSize="5" />
            </div>
        ),
        []
    );

    return (
        <div className={className}>
            {matchMobileMQ ? (
                <Drawer
                    open={open}
                    onClose={handleDrawerToggle}
                    variant="temporary"
                    ModalProps={{ keepMounted: true }}
                >
                    {drawerHeader}
                    {drawerContent}
                </Drawer>
            ) : (
                open && (
                    <>
                        {drawerHeader}
                        {drawerContent}
                    </>
                )
            )}
        </div>
    );
};

MainDrawer.propTypes = {
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
};

export default MainDrawer;
