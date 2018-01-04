import React, { Component } from 'react'
import { Col } from 'reactstrap'
import './styles/FlipCard.css'

class FlipCard extends Component {
    render() {
        return (
            <div>
                <div className="flip-container">
                    <div className="flipper">
                        <div className="front">
                            <img src="retro-carta.jpg" alt="retro" width="100%" />{' '}
                        </div>
                        <div className="back">
                            <img src="fante-di-quadri.jpg" alt="fante di quadri" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlipCard
