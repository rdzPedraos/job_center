import { useState } from 'react';
import PropTypes from 'prop-types';
import { timeDifference } from '@/Utils/TimeDifference';

import BoxComponent from '@/Components/main/Box';
import DrawerComponent from '@/Components/Drawer';
import CircleSteps from '@/Components/main/CircleSteps';

import JobDrawer from '../../JobOffer/partials/Jobs/JobDrawer';

function List({ jobStatuses, jobRequests, academicPrograms }) {
    const [jobId, setJobId] = useState(null);
    const [programs, statuses] = [{}, {}];

    //Let's turn the arrangement that comes into an object identified with the ID of each record
    academicPrograms.forEach(({ id, ...data }) => (programs[id] = data));
    jobStatuses.forEach(({ id, ...data }) => (statuses[id] = data));

    return (
        <div className="flex flex-col gap-5">
            {jobRequests.map((request, id) => {
                const programData = programs[request.job.academic_program_id];
                const statusData = statuses[request.job_request_status_id];

                return (
                    <BoxComponent
                        key={id}
                        className="cursor-pointer flex justify-between"
                        onClick={() => setJobId(request.job.id)}
                    >
                        <div>
                            <p className="text-lg">{request.job.title}</p>
                            <p className="lowercase first-letter:uppercase text-gray-400">
                                {programData.name}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CircleSteps
                                radius={27}
                                strokeSize={7}
                                steps={4}
                                step={request.job_request_status_id}
                                activeSegmentColor={statusData.color}
                            />

                            <div className="text-xs text-gray-500">
                                <p className={`text-sm font-bold text-[${statusData.color}]`}>
                                    {statusData.name}
                                </p>

                                <p>Inscrito hace {timeDifference(new Date(request.created_at))}</p>
                                <p>{request.count} candidatos postulados</p>
                            </div>
                        </div>
                    </BoxComponent>
                );
            })}

            <DrawerComponent open={jobId !== null} onClose={() => setJobId(null)}>
                <JobDrawer jobId={jobId} />
            </DrawerComponent>
        </div>
    );
}

List.propTypes = {
    jobStatuses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
        })
    ),

    jobRequests: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            job: PropTypes.shape({
                name: PropTypes.string,
            }),
        })
    ),

    academicPrograms: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })
    ),
};

export default List;
