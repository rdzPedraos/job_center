import PropTypes from 'prop-types';

function Chip({ className, text, active = false, ...props }) {
    const label = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    return (
        <div
            className={`py-2 px-3 rounded-full cursor-pointer border-[1px] transition-colors 
                ${active ? 'bg-primary bg-opacity-10 border-gray-400' : 'bg-white'} ${className}
            `}
            {...props}
        >
            <p className="text-sm">{label}</p>
        </div>
    );
}

Chip.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    active: PropTypes.bool,
};

export default Chip;
