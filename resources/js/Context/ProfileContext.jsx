import { usePage } from "@inertiajs/react";
import React, { useEffect, useState, createContext } from "react";

export const ProfileMenuContext = createContext();

function ProfileMenuProvider({ children }) {
    const [documentTypes, setDocumentTypes] = useState([]);
    const [showProfileDrawer, setShowProfileDrawer] = useState(false);
    const { user } = usePage().props.auth;

    useEffect(() => {
        axios
            .get("api/documentTypes")
            .then((res) => setDocumentTypes(res.data));
    }, []);

    return (
        <ProfileMenuContext.Provider
            value={{
                showProfileDrawer,
                setShowProfileDrawer,
                user,
                documentTypes,
            }}
        >
            {children}
        </ProfileMenuContext.Provider>
    );
}

export default ProfileMenuProvider;
