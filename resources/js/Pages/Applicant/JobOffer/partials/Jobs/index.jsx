import React, { useContext, useState } from "react";
import axios from "axios";

import { JobOfferFiltersContext } from "@/Context/FilterContext";

import JobCard from "./JobCard";
import JobDrawer from "./JobDrawer";

import { TablePagination } from "@mui/material";
import DrawerComponent from "@/Components/Drawer";

function Jobs() {
    const [jobInfo, setJobInfo] = useState(null);
    const { jobs, pagination, onSubmit } = useContext(JobOfferFiltersContext);

    const onPageChange = (ev, newPage) => {
        onSubmit({ page: newPage + 1, per_page: pagination.per_page });
    };

    const onRowsPerPageChange = (ev) => {
        onSubmit({ page: pagination.page, per_page: ev.target.value });
    };

    const onClickJob = (id) => {
        axios
            .post(route("applicant.job.offer.show", id))
            .then(({ data }) => {
                setJobInfo(data);
            })
            .catch(() => {
                console.log("error");
            });
    };

    return (
        <>
            {pagination.total && (
                <TablePagination
                    component="div"
                    count={pagination.total}
                    page={pagination.page - 1}
                    rowsPerPage={pagination.per_page}
                    onPageChange={onPageChange}
                    onRowsPerPageChange={onRowsPerPageChange}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                />
            )}

            <div className="flex flex-col gap-7 mt-5">
                {jobs.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        onClick={() => onClickJob(job.id)}
                    />
                ))}
            </div>

            <DrawerComponent
                open={jobInfo !== null}
                onClose={() => setJobInfo(null)}
            >
                {jobInfo && <JobDrawer job={jobInfo} setJob={setJobInfo} />}
            </DrawerComponent>
        </>
    );
}

export default Jobs;
