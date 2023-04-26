import React, { useContext } from "react";
import { Link } from "@inertiajs/react";

import { ProfileMenuContext } from "../../Context/ProfileContext";
import { Logout, SettingsOutlined } from "@mui/icons-material";

export default function SettingsComponent({ addOptions = [] }) {
    const { setShowProfileDrawer } = useContext(ProfileMenuContext);
    const items = [
        ...addOptions,
        null,
        {
            description: "Configuración",
            icon: SettingsOutlined,
            action: () => setShowProfileDrawer(true),
        },
        {
            description: "Salir",
            icon: Logout,
            route: "logout",
            method: "post",
        },
    ];

    const className =
        "flex w-full pl-4 pr-10 py-5 gap-3 hover:scale-105 hover:text-primary hover:bg-gray-50 transition-transform";

    return (
        <ul className="min-w-[230px]">
            {items.map((item, id) => {
                if (item === null) {
                    return <hr key={id} />;
                }

                const content = (
                    <>
                        <item.icon />
                        <p className="text-left">{item.description}</p>
                    </>
                );

                return (
                    <li key={id}>
                        {item.route && (
                            <Link
                                method={item.method || "get"}
                                href={route(item.route)}
                                className={className}
                                as="button"
                            >
                                {content}
                            </Link>
                        )}
                        {item.action && (
                            <button onClick={item.action} className={className}>
                                {content}
                            </button>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
