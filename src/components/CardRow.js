import React, { Component } from 'react'
import { Row } from 'reactstrap'
import FlipCard from '../FlipCard'

class CardRow extends Component {
    render() {
        const { cols } = this.props;
        var colsDom = [];
        for ( var i = 0; i < cols; i++ ) {
            colsDom.push(
                <FlipCard key={`col${i}`} />
            );
        }

        return (
            <Row className="text-center">
                {colsDom}
            </Row>

        )
    }
}

export default CardRow
