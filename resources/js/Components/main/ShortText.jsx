import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function ShortText({ text, maxLength = 150, className }) {
    const [showMore, setShowMore] = useState(false);

    const short_text = text.slice(0, maxLength);

    return (
        <p className={className}>
            {showMore ? text : short_text}

            {text.length > maxLength && (
                <>
                    {!showMore && <span>...</span>}
                    <span
                        className="text-primary ml-2 hover:underline cursor-pointer"
                        onClick={() => setShowMore((p) => !p)}
                    >
                        {showMore ? "ver menos" : "ver más"}
                    </span>
                </>
            )}
        </p>
    );
}

ShortText.propTypes = {
    text: PropTypes.string,
    maxLength: PropTypes.number,
    className: PropTypes.string,
};

export default ShortText;
