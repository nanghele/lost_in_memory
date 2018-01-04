import React from 'react';
import PropTypes from 'prop-types';
import FlipCard from '../FlipCard';
import styles from './styles';

class Card extends React.Component {
    flip = () => {
        if ( this.props.card.flipped ) {
            return;
        }
        this.props.onFlip( this.props.card );
    }

    renderBack = () => (
        <div key="back">
            <div style={[styles.cardView, styles.frontView]}>
                <img alt={`${this.props.children} back`}
                    style={styles.cardImage}
                    src={this.props.children}
                />
            </div>
        </div>
    );

    renderFront = () => (
        <div onClick={this.flip} key="front">
            <img alt="front"
                style={styles.cardImage}
                src="card-back.png"
            />
        </div>
    );

    render() {
        return (
            <FlipCard isFlipped={this.props.card.flipped}>
                {this.renderFront()}
                {this.renderBack()}
            </FlipCard>
        );
    }
}

Card.propTypes = {
    children: PropTypes.string.isRequired,
    onFlip: PropTypes.func.isRequired,
    card: PropTypes.shape( {
        id: PropTypes.number,
        label: PropTypes.number,
        image: PropTypes.string,
        flipped: PropTypes.bool.isRequired,
    } ).isRequired,
};

export default Card;
