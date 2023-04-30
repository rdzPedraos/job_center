import React from "react";
import PropTypes from "prop-types";

import { Bookmark, BookmarkBorder, Favorite } from "@mui/icons-material";
import { timeDifference } from "@/Utils/TimeDifference";
import { useState } from "react";

function Header({ job, className, ...props }) {
    const offerTimeSince = timeDifference(new Date(job.job_offer_start_date));
    const jobEstimatedTime = job.job_end_date
        ? timeDifference(
              new Date(job.job_start_date),
              new Date(job.job_end_date)
          )
        : null;

    return (
        <div
            className={`grid grid-cols-[auto_1fr_auto] gap-x-4 ${className}`}
            {...props}
        >
            {/* Caratula */}
            <div
                className={`
                    row-span-2 h-14 w-14
                    grid place-content-center rounded-lg
                    text-white bg-[${job.academic_program.academic_faculty.color}]
                `}
            >
                <Favorite fontSize="medium" />
            </div>

            {/* Cabezal de la oferta */}
            <div className="flex gap-1 items-center text-sm text-gray-400">
                <span className="font-bold text-black text-xl">
                    {job.title}
                </span>
                <span>•</span>
                <span>{offerTimeSince}</span>
            </div>

            {/* Bookmarks */}
            <div className="row-span-2">
                <div
                    className={
                        "p-2 rounded-md border-2 transition-all " +
                        (false
                            ? "text-yellow-500 bg-white hover:text-gray-300 hover:bg-transparent hover:scale-95"
                            : "hover:text-yellow-500 hover:bg-white hover:scale-105")
                    }
                >
                    {false ? (
                        <Bookmark fontSize="medium" />
                    ) : (
                        <BookmarkBorder fontSize="medium" />
                    )}
                </div>
            </div>

            {/* Información del trabajo */}
            <div className="text-sm text-gray-500">
                {job.monthly_salary && (
                    <span>Salario Mensual: ${job.monthly_salary} | </span>
                )}
                {jobEstimatedTime && (
                    <span>Tiempo estimado: {jobEstimatedTime}</span>
                )}
            </div>
        </div>
    );
}

Header.propTypes = {
    job: PropTypes.object,
    className: PropTypes.string,
};

export default Header;
