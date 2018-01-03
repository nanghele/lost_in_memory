import React, { Component } from 'react'
import './FlipCard.css'

class FlipCard extends Component {
  render() {
    return (
      <div class="flip-container">
        <div class="flipper">
          <div class="front">
            <img src="retro-carta.jpg" width="321" height="449" />{' '}
          </div>
          <div class="back">
            <img src="fante-di-quadri.jpg" width="321" height="449" />
          </div>
        </div>
      </div>
    )
  }
}

export default FlipCard
