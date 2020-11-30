import React, { Component } from 'react';
import Navigation from './view/Nav';
// import Covers from './view/Covers';
// import logo from './logo.svg';
// import './css/App.css';

// import { Jumbotron } from 'reactstrap';
// import { Site, Container, Row, Col } from 'reactstrap';



class App extends Component {
    render() {
    return (
        <div className="site-wrapper-inner">

            <div className="cover-container">


                <Navigation />

                <div className="mastfoot">
                    <div className="inner">
                        <p>&copy;2017 Ian Calaunan</p>
                    </div>
                </div>

            </div>

        </div>
    );
    }
}

export default App;
