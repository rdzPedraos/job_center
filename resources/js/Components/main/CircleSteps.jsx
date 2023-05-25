import PropTypes from 'prop-types';

function CircleSteps({
    step,
    steps,
    radius,
    strokeSize,
    spaceSize,
    strokeColor,
    activeSegmentColor,
    inactiveSegmentColor,
}) {
    const svgSize = radius * 2 + strokeSize;
    const circumference = 2 * Math.PI * radius;
    const segmentSize = circumference / steps;
    const center = svgSize / 2;

    const generalAttr = {
        r: radius,
        cx: center,
        cy: center,
        fill: 'transparent',
        strokeWidth: strokeSize,
        strokeDasharray: circumference,
    };

    const segments = [];
    //The logic consists in having multiple circular SVGs with a complete stroke but run x distance
    for (let i = steps; i > 0; i--) {
        //We obtain the distance to move, it is done with the increaser since the for decreases and allows us to place less long circles on top.
        const moveStroke = circumference - segmentSize * i;

        segments.push(
            <circle
                key={i + '_b'}
                stroke={strokeColor}
                strokeDashoffset={moveStroke}
                {...generalAttr}
            />,

            <circle
                key={i}
                stroke={i > step ? inactiveSegmentColor : activeSegmentColor}
                strokeDashoffset={moveStroke + spaceSize}
                className="transition-all"
                {...generalAttr}
            />
        );
    }

    return (
        <svg width={svgSize} height={svgSize}>
            <g transform={`rotate(-90 ${center} ${center})`}>{segments}</g>
        </svg>
    );
}

CircleSteps.propTypes = {
    steps: PropTypes.number,
    step: PropTypes.number,
    radius: PropTypes.number,
    strokeSize: PropTypes.number,
    strokeColor: PropTypes.string,
    spaceSize: PropTypes.number,
    activeSegmentColor: PropTypes.string,
    inactiveSegmentColor: PropTypes.string,
};

CircleSteps.defaultProps = {
    steps: 4,
    radius: 30,
    strokeSize: 12,
    spaceSize: 3,
    strokeColor: 'white',
    activeSegmentColor: '#1976d2',
    inactiveSegmentColor: '#95b0eb',
};

export default CircleSteps;
