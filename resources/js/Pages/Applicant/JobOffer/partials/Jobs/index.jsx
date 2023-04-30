import React from "react";
import PropTypes from "prop-types";
import JobCard from "./JobCard";

function Jobs({ jobs }) {
    return (
        <div className="flex flex-col gap-7">
            {jobs.map((job) => (
                <JobCard job={job} key={job.id} />
            ))}
        </div>
    );
}

Jobs.propTypes = {};

export default Jobs;
