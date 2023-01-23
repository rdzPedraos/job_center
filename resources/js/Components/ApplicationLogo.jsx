import PropTypes from "prop-types";
import Logo from "../../img/logo.png";
import { Link } from "@inertiajs/react";

export default function ApplicationLogo({
    justIcon = false,
    txtSize = "2xl",
    imgSize = "10",
    gapSize = "3",
    title = "Ir al inicio",
    handleClick = () => {
        window.location = route("login");
    },
}) {
    return (
        <div className="flex justify-center">
            <button
                onClick={handleClick}
                className={`flex items-center gap-${gapSize} hover:opacity-80`}
                title={title}
            >
                <img
                    src={Logo}
                    className={`w-${imgSize}`}
                    alt="Escudo Universitario"
                />
                {!justIcon && (
                    <h1
                        className={`text-gray-600 font-extrabold text-${txtSize}`}
                    >
                        Unitrópico
                    </h1>
                )}
            </button>
            <Link href="/"></Link>
        </div>
    );
}

ApplicationLogo.propTypes = {
    justIcon: PropTypes.bool,
    txtSize: PropTypes.string,
    imgSize: PropTypes.string,
    gapSize: PropTypes.string,
    handleClick: PropTypes.func,
};
