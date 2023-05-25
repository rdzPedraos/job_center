import Chip from '@/Components/main/Chip';
import PropTypes from 'prop-types';

function Filters({ activeId, setActiveId, statuses, className }) {
    return (
        <div className={`flex gap-3 ${className}`}>
            <Chip
                text="Todas las postulaciones"
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
    className: PropTypes.string,
};

export default Filters;
