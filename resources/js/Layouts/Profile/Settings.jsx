import React from "react";
import { Link } from "@inertiajs/react";
import { Logout, SettingsOutlined } from "@mui/icons-material";

export default function SettingsComponent({ handleShowProfile }) {
    const items = [
        {
            description: "Configuración",
            icon: SettingsOutlined,
            action: () => handleShowProfile(true),
        },
        {
            description: "Salir",
            icon: Logout,
            href: route("logout"),
            method: "post",
        },
    ];

    return (
        <ul>
            {items.map((item, id) => {
                const content = (
                    <>
                        <item.icon />
                        <p className="text-left">{item.description}</p>
                    </>
                );
                const className =
                    "flex w-full pl-4 pr-10 py-5 gap-3 hover:scale-105 hover:text-primary hover:bg-gray-50 transition-transform";

                return (
                    <li key={id}>
                        {item.href && (
                            <Link
                                method={item.method || "get"}
                                href={item.href}
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
