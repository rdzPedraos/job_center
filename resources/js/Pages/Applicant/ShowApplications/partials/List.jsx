import BoxComponent from '@/Components/main/Box';
import CircleSteps from '@/Components/main/CircleSteps';
import PropTypes from 'prop-types';

function List({ jobRequests }) {
    return (
        <div className="flex flex-col gap-5">
            {jobRequests.map(request => (
                <BoxComponent key={request.id} className="cursor-pointer flex justify-between">
                    <div>
                        <p className="text-lg">{request.job.title}</p>
                        <p className="lowercase first-letter:uppercase text-gray-400">
                            {request.job.academic_program.name}
                        </p>
                    </div>

                    <div>
                        <CircleSteps steps={3} step={2} />
                    </div>
                </BoxComponent>
            ))}
        </div>
    );
}

List.propTypes = {
    jobRequests: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            job: PropTypes.shape({
                name: PropTypes.string,
            }),
            academic_program: PropTypes.shape({
                name: PropTypes.string,
            }),
        })
    ),
};

export default List;
