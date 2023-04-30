import React from "react";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/react";

function UnderlineText({ content, href, method = "get", as = "a", ...props }) {
    return (
        <Link
            className="text-primary hover:text-secondary underline"
            {...{
                href,
                method,
                as,
                ...props,
            }}
        >
            {content}
        </Link>
    );
}

UnderlineText.propTypes = {
    content: PropTypes.string,
    href: PropTypes.string,
    method: PropTypes.oneOf(["get", "post", "put", "patch"]),
};

export default UnderlineText;
