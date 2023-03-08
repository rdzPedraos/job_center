import ApplicationLogo from "@/Components/ApplicationLogo";
import SpinnerComponent from "@/Components/welcome";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import MenuComponent from "./MenuComponent";
import ProfileMenu from "../Profile";

export default function ParticipantLayout({ children }) {
    const LGScreen = useMediaQuery("(min-width:1020px)");
    const [loading, setLoading] = useState(false);
    useState(() => setTimeout(() => setLoading(false), 3000), []);

    return (
        <>
            {loading && <SpinnerComponent />}

            <header className="grid grid-cols-2 lg:grid-cols-[auto,1fr,auto] justify-between lg:px-10 gap-24 border-b-2 bg-white">
                <div className="my-4 flex justify-center">
                    <ApplicationLogo txtSize="xl" imgSize="7" />
                </div>
                {LGScreen && <MenuComponent />}
                <ProfileMenu />
            </header>

            <main className="min-h-screen bg-base_white">{children}</main>
        </>
    );
}
