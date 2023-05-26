import PropTypes from 'prop-types';
import Chip from '@/Components/main/Chip';

function Filters({ activeId, setActiveId, statuses, jobRequestsSize, className }) {
    return (
        <div className={`flex gap-3 ${className}`}>
            <Chip
                text={`Todas las postulaciones (${jobRequestsSize})`}
                active={activeId === null}
                onClick={() => setActiveId(null)}
            />

            {statuses.map(({ id, name }) => {
                return (
                    <Chip
                        key={id}
                        text={name}
                        active={activeId === id}
                        onClick={() => setActiveId(id)}
                    />
                );
            })}
        </div>
    );
}

Filters.propTypes = {
    activeId: PropTypes.number,
    setActiveId: PropTypes.func,
    statuses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })
    ),
    jobRequestsSize: PropTypes.number,
    className: PropTypes.string,
};

export default Filters;
