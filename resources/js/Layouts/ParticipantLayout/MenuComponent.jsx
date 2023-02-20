import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import React from "react";

const Items = [
    {
        description: "Encontrar trabajo",
        route: "participant.searchJob",
    },
    {
        description: "Mis postulaciones",
        route: "participant.postulations",
    },
    {
        description: "Mi Hoja de Vida",
        route: "participant.cv",
    },
];

export default function MenuComponent() {
    return (
        <nav>
            <ul className="h-full flex gap-4">
                {Items.map((item, id) => {
                    const active = route().current(item.route);
                    return (
                        <Link href={route(item.route)} key={id}>
                            <div className="h-full flex relative items-center px-4">
                                <p
                                    className={
                                        active
                                            ? "text-primary"
                                            : "hover:text-primary"
                                    }
                                >
                                    {item.description}
                                </p>
                                {active ? (
                                    <motion.div
                                        className="absolute -left-2 -right-2 bottom-0 h-1 bg-primary"
                                        layoutId="underline"
                                    ></motion.div>
                                ) : null}
                            </div>
                        </Link>
                    );
                })}
            </ul>
        </nav>
    );
}
