import React from 'react'
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import CardList from '../components/CardList';

class CardBoard extends React.Component {

    static propTypes = {
        photos: PropTypes.arrayOf( PropTypes.string ).isRequired
    }

    constructor( props ) {
        super( props );

        const singleCards = this.props.photos.map(( photo, i ) => (
            { label: i, image: photo, flipped: false }
        ) );

        const cards = [...singleCards, ...singleCards]
            //togliere questo commento per mescolare le carte
            //.sort(() => Math.round( Math.random() ) )
            .map(( card, i ) => ( { ...card, id: i } ) );

        const columns = Math.ceil( Math.sqrt( cards.length ) );
        const rows = cards.length / columns;

        this.state = {
            cards,
            flipping: [],
            columns,
            rows,
            win: false,
        };
    }

    hide = card => ( { ...card, flipped: false } );

    show = card => ( { ...card, flipped: true } );

    hideCards = ( cardA, cardB ) =>
        this.state.cards
            .map( c => ( c.id === cardA.id || c.id === cardB.id ? this.hide( c ) : { ...c } ) );

    showCard = card =>
        this.state.cards
            .map( c => ( c.id === card.id ? this.show( c ) : { ...c } ) );

    rollback = ( cardA, cardB ) =>
        this.setState( { flipping: [], cards: this.hideCards( cardA, cardB ), win: false } );

    flipCard = ( card ) => {
        let win = false;
        if ( this.state.flipping.length === 0 ) {
            this.setState( { flipping: [card], cards: this.showCard( card ), win } );
        } else {
            const alreadyFlippedCard = this.state.flipping[0];
            if ( card.label !== alreadyFlippedCard.label ) {
                setTimeout(() => this.rollback( card, alreadyFlippedCard ), 1000 );
            } else {
                win = this.state.cards.filter( c => !c.flipped ).length === 1;
            }
            this.setState(
                {
                    flipping: [],
                    cards: this.showCard( card ),
                    win
                }
            );
        }
    }

    resetGame = () => {
        const { history } = this.props;
        history.push( '/' )
    }

    render() {
        const { win, rows, columns, cards } = this.state;

        return (
            <div>
                <CardList onFlip={this.flipCard} rows={rows} columns={columns} cards={cards} />
                <Modal isOpen={win} position="center">
                    <ModalHeader toggle={this.toggle}>Hai vinto il gioco</ModalHeader>
                    <ModalBody>
                        <button onClick={this.resetGame}>Torna alla home</button>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CardBoard;
