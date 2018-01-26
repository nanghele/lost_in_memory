import React from 'react';
import PropTypes from 'prop-types';

const FlipCard = ( { isFlipped, front, back } ) => (
    <div style={{ margin: '1px' }}>
        {isFlipped ? back : front}
    </div>
)

FlipCard.propTypes = {
    isFlipped: PropTypes.bool.isRequired,
    front: PropTypes.objectOf( React.Component ).isRequired,
    back: PropTypes.objectOf( React.Component ).isRequired
};

export default FlipCard

