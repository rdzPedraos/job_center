import { useContext, useState } from 'react';
import axios from 'axios';

import { JobOfferFiltersContext } from '@/Context/FilterContext';

import JobCard from './JobCard';
import JobDrawer from './JobDrawer';

import { TablePagination } from '@mui/material';
import DrawerComponent from '@/Components/Drawer';

function Jobs() {
    const [jobId, setJobId] = useState(null);
    const { jobs, pagination, onSubmit } = useContext(JobOfferFiltersContext);

    const onPageChange = (ev, newPage) => {
        onSubmit({ page: newPage + 1, per_page: pagination.per_page });
    };

    const onRowsPerPageChange = ev => {
        onSubmit({ page: pagination.page, per_page: ev.target.value });
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
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} onClick={() => setJobId(job.id)} />
                ))}
            </div>

            <DrawerComponent open={jobId !== null} onClose={() => setJobId(null)}>
                <JobDrawer jobId={jobId} />
            </DrawerComponent>
        </>
    );
}

export default Jobs;
