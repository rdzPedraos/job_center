import { useState } from 'react';
import { Head } from '@inertiajs/react';
import PropTypes from 'prop-types';

import Info from './partials/Info';
import Filters from './partials/Filters';
import List from './partials/List';

function SeePostulations({ JobStatuses, JobRequests, AcademicPrograms }) {
    const [activeStatus, setActiveStatus] = useState(null);

    // Filter only the job states that are in job requests:
    const enableStatuses = JobStatuses.filter(({ id }) =>
        JobRequests.some(({ job_request_status_id }) => job_request_status_id === id)
    );

    // Filter the jobs that have the activeStatus
    const showJobs = JobRequests.filter(
        ({ job_request_status_id }) =>
            activeStatus === null || activeStatus === job_request_status_id
    );

    return (
        <>
            <Head title="Mis postulaciones" />

            <div className="md:w-5/6 lg:w-5/6 xl:w-2/3 mx-auto">
                <Filters
                    className="mb-6"
                    activeId={activeStatus}
                    setActiveId={setActiveStatus}
                    statuses={enableStatuses}
                    jobRequestsSize={JobRequests.length}
                />

                <div className="lg:grid lg:grid-cols-[1fr_400px] gap-8">
                    <List
                        jobRequests={showJobs}
                        jobStatuses={JobStatuses}
                        academicPrograms={AcademicPrograms}
                    />

                    <div>
                        <Info activeId={activeStatus} statuses={JobStatuses} />
                    </div>
                </div>
            </div>
        </>
    );
}

SeePostulations.propTypes = {
    JobStatuses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
        })
    ),

    JobRequests: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            job: PropTypes.shape({
                name: PropTypes.string,
            }),
        })
    ),

    AcademicPrograms: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })
    ),
};

export default SeePostulations;
