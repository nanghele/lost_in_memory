import React from 'react';
import PropTypes from 'prop-types';

class FlipCard extends React.Component {

    render() {
        const { isFlipped } = this.props;
        return (
            <div style={{ margin: '1px' }}>
                {isFlipped ? this.props.children[1] : this.props.children[0]
                }
            </div>
        )
    }

}

FlipCard.propTypes = {
    isFlipped: PropTypes.bool.isRequired,
};

export default FlipCard

