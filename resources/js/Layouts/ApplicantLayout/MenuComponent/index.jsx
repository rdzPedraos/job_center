import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import React from "react";
import Options from "./options";

export default function MenuComponent() {
    return (
        <nav>
            <ul className="h-full flex gap-4">
                {Options.map((item, id) => {
                    const active = route().current(item.route);
                    return (
                        <Link href={route(item.route)} key={id}>
                            <div className="h-full flex relative items-center px-4 hover:text-primary">
                                <p className={active ? "text-primary" : ""}>
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
