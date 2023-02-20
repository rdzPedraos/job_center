import React from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { AccountCircle, Logout } from "@mui/icons-material";

const items = [
    {
        description: "Ver mi perfil",
        href: route("profile.edit"),
        icon: AccountCircle,
    },
    {
        description: "Salir",
        href: route("logout"),
        method: "post",
        icon: Logout,
    },
];

export default function UserSettingsComponent() {
    return (
        <ul className="py-3">
            {items.map((item, id) => (
                <motion.li
                    key={id}
                    initial={{}}
                    whileHover={{
                        scale: 1.1,
                    }}
                    className="hover:text-primary hover:bg-gray-50"
                >
                    <Link
                        method={item.method || "get"}
                        href={item.href}
                        as="button"
                        className="flex w-full px-5 py-3 gap-1 "
                    >
                        <item.icon />
                        {item.description}
                    </Link>
                </motion.li>
            ))}
        </ul>
    );
}
