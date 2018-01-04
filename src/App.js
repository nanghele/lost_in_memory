import React, { Component } from 'react'
import logo from './logo.svg'
import './styles/App.css'
import { Container } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Home from './views/Home'
import CardBoard from './views/CardBoard'

class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
        }
    }

    render() {
        return (
            <Router>
                <Container className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">React memory game</h1>
                    </header>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/end" component={Home} />
                    <Route path="/game" render={props => <CardBoard photos={this.state.photos} {...props} />} />
                </Container>
            </Router>
        )
    }
}

export default App
