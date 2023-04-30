import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SpinnerComponent from "@/Components/welcome";
import ProfileMenuProvider from "@/Context/ProfileContext";

import Header from "./Header";

export default function ApplicantLayout({ children }) {
    const [loading, setLoading] = useState(false);
    //useEffect(() => setTimeout(() => setLoading(false), 3000), []);

    return (
        <div className="bg-base_white min-h-screen">
            {loading && <SpinnerComponent />}

            <ProfileMenuProvider>
                <Header />
                <main className="py-10">{children}</main>
            </ProfileMenuProvider>

            <ToastContainer />
        </div>
    );
}
