import PropTypes from 'prop-types';

import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    timelineItemClasses,
    TimelineSeparator,
} from '@mui/lab';

function TimelineComponent({ items }) {
    const length = items.length;
    return (
        <Timeline
            sx={{
                padding: 0,
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            {items.map((item, id) => (
                <TimelineItem key={id}>
                    {id + 1 == length ? (
                        <TimelineDot color="primary" />
                    ) : (
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector color="primary" />
                        </TimelineSeparator>
                    )}
                    <TimelineContent>{item}</TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

TimelineComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string])),
};

export default TimelineComponent;
