import BoxComponent from '@/Components/main/Box';
import { Circle } from '@mui/icons-material';
import PropTypes from 'prop-types';

function Info({ activeId, statuses }) {
    return (
        <BoxComponent>
            <img src="storage\img\focus-photo.png" className="w-2/3 mx-auto" />

            <p className="my-4">Estos son los estados en los que puede estar tú postulación:</p>

            <ul className="flex flex-col gap-4">
                {statuses.map(({ id, name, description }) => {
                    const active = activeId === id;
                    const [bgColor, textColor] = [
                        active ? 'bg-primary' : 'bg-gray-400',
                        active ? 'text-primary' : 'text-black text-opacity-40',
                    ];

                    return (
                        <li key={id} className="flex gap-2">
                            <div
                                className={`grid place-items-center w-5 h-5 rounded-full bg-opacity-20 ${bgColor}`}
                            >
                                <div className={`w-2 h-2 rounded-full ${bgColor}`} />
                            </div>

                            <span>
                                <p className={`lowercase first-letter:uppercase ${textColor}`}>
                                    {name}
                                </p>
                                <p className={`lowercase first-letter:uppercase ${textColor}`}>
                                    {description}
                                </p>
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
