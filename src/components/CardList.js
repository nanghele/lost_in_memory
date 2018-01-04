import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import Card from './Card';

const CardList = ( { cards, onFlip, rows, columns } ) => {
    let cardIndex = 0;

    const randomColumns = () => {
        const columnsToRender = [];
        for ( let c = 0; c < columns; c++ ) {
            const card = cards[cardIndex];
            cardIndex++;
            columnsToRender.push(
                <div key={c} className="col-md-3">
                    <Card onFlip={onFlip} card={card}>{card.image}</Card>
                </div>,
            );
        }
        return columnsToRender;
    };

    const rowsToRender = [];
    for ( let i = 0; i < rows; i++ ) {
        rowsToRender.push(
            <Row key={i}>{randomColumns()}</Row>,
        );
    }

    return (
        <div className="col-md-12">
            {rowsToRender}
        </div>
    );
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape( {
            label: PropTypes.label,
        } ),
    ).isRequired,
    onFlip: PropTypes.func.isRequired,
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
};

export default CardList;
