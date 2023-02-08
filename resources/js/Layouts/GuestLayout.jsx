import ApplicationLogo from "@/Components/ApplicationLogo";
import waves from "nice-waves";
import { createElement, useEffect } from "react";

const opts = {
    fills: [
        "rgba(2, 90, 76, 0.8)",
        "rgba(3, 121, 102, 0.8)",
        "rgba(5, 161, 135, 0.5)",
        "rgba(0, 203, 169, 0.8)",
    ],
    flowRate: 0.1,
    swayRate: 0,
    wavelength: 1,
    complexity: 1,
    curviness: 0.65,
    offset: 0,
    randomFlowRate: 0.01,
    randomHeight: 0,
    swayVelocity: 0,
    randomSwayRate: 0,
    randomOffset: 0.42,
};

export default function GuestLayout({
    children,
    width = "w-full sm:max-w-4xl",
}) {
    //?doc: https://github.com/gVguy/nice-waves#nice-waves
    useEffect(() => {
        waves(opts).mount();
    }, []);

    return (
        <div className="min-h-screen bg-base_white flex items-center justify-center relative overflow-x-hidden">
            <div
                className={`
                    block ${width}
                    mx-0 sm:mx-5 p-10 
                    bg-white shadow-md 
                    overflow-hidden rounded-lg z-50`}
            >
                <ApplicationLogo />
                {children}
            </div>

            <div id="waves" className="absolute w-screen h-1/5 bottom-0"></div>
        </div>
    );
}
