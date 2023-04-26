import React from "react";

import ApplicationLogo from "@/Components/ApplicationLogo";
import ProfileMenu from "@/Layouts/Profile";

import MenuComponent from "./MenuComponent";
import options from "./MenuComponent/options";

import { useMediaQuery } from "@mui/material";

function Header() {
    const TabletScreen = useMediaQuery("(max-width:1070px)");
    const MobileScreen = useMediaQuery("(max-width:770px)");

    return (
        <header
            className="
                flex px-10 lg:gap-24 justify-between
                shadow-lg bg-white
            "
        >
            <ApplicationLogo txtSize="xl" imgSize="7" className="py-4" />

            {!MobileScreen && (
                <MenuComponent
                    className={TabletScreen ? "" : "grow"}
                    showIcons={TabletScreen}
                />
            )}

            <div className="flex items-center">
                <ProfileMenu addOptions={MobileScreen ? options : []} />
            </div>
        </header>
    );
}

export default Header;
