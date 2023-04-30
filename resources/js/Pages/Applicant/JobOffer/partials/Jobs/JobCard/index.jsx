import React from "react";
import PropTypes from "prop-types";

import ShortText from "@/Components/main/ShortText";

import Header from "./Header";
import Footer from "./Footer";

function JobCard({ job, className, ...props }) {
    return (
        <div
            className={`
                flex flex-col gap-5 p-5 rounded-lg 
                border-[1px] border-gray-200 bg-base_white
                cursor-pointer hover:shadow hover:-translate-y-2 transition-all
                ${className}
            `}
            {...props}
        >
            <Header job={job} />

            <ShortText
                maxLength={300}
                text={job.description}
                showMoreBtn={false}
            />

            <Footer
                academic_program={job.academic_program}
                academic_faculty={job.academic_program.academic_faculty}
            />
        </div>
    );
}

JobCard.propTypes = {
    job: PropTypes.object,
    className: PropTypes.string,
};

export default JobCard;
