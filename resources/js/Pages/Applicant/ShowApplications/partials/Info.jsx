import PropTypes from 'prop-types';
import BoxComponent from '@/Components/main/Box';

function Info({ activeId, statuses }) {
    return (
        <BoxComponent>
            <img src="storage\img\focus-photo.png" className="w-2/3 mx-auto" />

            <p className="my-4">Estos son los estados en los que puede estar tú postulación:</p>

            <ul className="flex flex-col gap-4">
                {statuses.map(({ id, name, description, color }) => {
                    const active = activeId === id;
                    const [bgColor, textColor] = [
                        active ? `bg-[${color}]` : 'bg-gray-400',
                        active ? `text-[${color}]` : 'text-black text-opacity-40',
                    ];

                    return (
                        <li key={id} className="flex gap-2">
                            <div
                                className={`grid place-items-center w-5 h-5 rounded-full bg-opacity-20 ${bgColor}`}
                            >
                                <div className={`w-2 h-2 rounded-full ${bgColor}`} />
                            </div>

                            <span>
                                <p className={textColor}>{name}</p>
                                <p className={textColor}>{description}</p>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </BoxComponent>
    );
}

Info.propTypes = {
    activeId: PropTypes.number,
    statuses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
        })
    ),
};

export default Info;
