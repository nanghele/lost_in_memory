import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import FlipCard from './FlipCard'
import './CardBoard.css'

class CardBoard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <FlipCard />
          </Col>
          <Col xs="3">
            <FlipCard />
          </Col>
          <Col xs="3">
            <FlipCard />
          </Col>
          <Col xs="3">
            <FlipCard />
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <FlipCard />
          </Col>
          <Col xs="3">
            <FlipCard />
          </Col>
          <Col xs="3">
            <FlipCard />
          </Col>
          <Col xs="3">
            <FlipCard />
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <FlipCard />
          </Col>
          <Col xs="3">
            <FlipCard />
          </Col>
          <Col xs="3">
            <FlipCard />
          </Col>
          <Col xs="3">
            <FlipCard />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CardBoard
