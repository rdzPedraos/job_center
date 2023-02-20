import ApplicationLogo from "@/Components/ApplicationLogo";
import SpinnerComponent from "@/Components/welcome";
import { useState } from "react";
import MenuComponent from "./MenuComponent";
import ProfileComponent from "./Profile";

export default function ParticipantLayout({ children }) {
    const [loading, setLoading] = useState(true);
    useState(() => setTimeout(() => setLoading(false), 3000), []);

    return (
        <>
            {loading && <SpinnerComponent />}

            <div className="flex flex-col h-screen w-screen bg-base_white">
                <header className="grid grid-cols-[auto,1fr,auto] px-10 gap-24 border-b-2 bg-white">
                    <div className="my-4">
                        <ApplicationLogo txtSize="xl" imgSize="7" />
                    </div>

                    <MenuComponent />
                    <ProfileComponent />
                </header>

                <main className="h-full">{children}</main>
            </div>
        </>
    );
}
