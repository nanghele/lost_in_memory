import React, { Component } from 'react'
import { Container } from 'reactstrap'

import CardRow from './components/CardRow'

import './styles/CardBoard.css'

const rows = 4;
const cols = 4;

class CardBoard extends Component {



    render() {

        var rowsDom = [];
        for ( var i = 0; i < rows; i++ ) {
            rowsDom.push(
                <CardRow cols={cols} key={`row${i}`} />
            );
        }
        return (
            <Container>
                {rowsDom}
            </Container>
        )
    }
}

export default CardBoard
