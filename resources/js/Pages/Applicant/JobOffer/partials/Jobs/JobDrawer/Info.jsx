import PropTypes from 'prop-types';
import TimelineComponent from '@/Components/TimelineComponent';

const Title = ({ label }) => {
    return <p className="text-2xl text-black font-bold">{label}</p>;
};

function Info({ jobInfo: { description }, functions, requirements }) {
    return (
        <>
            <Title label="Acerca del trabajo" />
            <p className="text-justify text-gray-500">{description}</p>
            <Title label="Funciones del cargo" />
            {functions.length == 0 ? (
                <p>No se establecieron funciones...</p>
            ) : (
                <TimelineComponent items={functions} />
            )}
            <Title label="Requisitos del cargo" />
            {requirements.length == 0 ? (
                <p>No se establecieron requisitos para el cargo...</p>
            ) : (
                <TimelineComponent items={requirements} />
            )}
        </>
    );
}

Info.propTypes = {
    jobInfo: PropTypes.shape({
        description: PropTypes.string,
    }),
    functions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string])),
    requirements: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string])),
};

Title.propTypes = {
    label: PropTypes.string,
};

export default Info;
