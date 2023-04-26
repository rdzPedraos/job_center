import React from "react";
import { Link } from "@inertiajs/react";

import Options from "./options";
import { motion } from "framer-motion";

export default function MenuComponent({ className, showIcons }) {
    return (
        <nav className={className}>
            <ul className="h-full flex gap-4">
                {Options.map((item, id) => {
                    const active = route().current(item.route);
                    return (
                        <Link href={route(item.route)} key={id}>
                            <div className="h-full flex relative items-center px-4 hover:text-primary">
                                {showIcons ? (
                                    <item.icon className="mr-2" />
                                ) : (
                                    <p className={active ? "text-primary" : ""}>
                                        {item.description}
                                    </p>
                                )}

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
