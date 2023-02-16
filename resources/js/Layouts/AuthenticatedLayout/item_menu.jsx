import React from "react";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/react";

const ItemMenu = ({ text, href, active }) => {
    return (
        <Link href={href}>
            <div
                className={`h-full flex items-center px-4 border-b-2 transition-all ${
                    active
                        ? "border-b-primary"
                        : "border-b-transparent hover:border-b-secondary"
                }`}
            >
                <p
                    className={`mt-2 ${
                        active ? "text-primary font-medium" : "text-secondary"
                    }`}
                >
                    {text}
                </p>
            </div>
        </Link>
    );
};

ItemMenu.propTypes = {};

export default ItemMenu;
