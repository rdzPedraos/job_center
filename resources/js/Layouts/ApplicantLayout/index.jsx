import ApplicationLogo from "@/Components/ApplicationLogo";
import SpinnerComponent from "@/Components/welcome";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import MenuComponent from "./MenuComponent";
import ProfileMenu from "../Profile";
import { ToastContainer } from "react-toastify";
import ProfileMenuProvider from "../Profile/MenuContext";

export default function ApplicantLayout({ children }) {
    const LGScreen = useMediaQuery("(min-width:1020px)");
    const [loading, setLoading] = useState(false);
    //useEffect(() => setTimeout(() => setLoading(false), 3000), []);

    return (
        <div className="bg-base_white min-h-screen">
            {loading && <SpinnerComponent />}

            <ProfileMenuProvider>
                <header className="grid grid-cols-2 lg:grid-cols-[auto,1fr,auto] justify-between lg:px-10 gap-24 border-b-2 bg-white mb-10">
                    <div className="my-4 flex justify-center">
                        <ApplicationLogo txtSize="xl" imgSize="7" />
                    </div>
                    {LGScreen && <MenuComponent />}

                    <ProfileMenu />
                </header>

                <main>{children}</main>
            </ProfileMenuProvider>

            <ToastContainer />
        </div>
    );
}
