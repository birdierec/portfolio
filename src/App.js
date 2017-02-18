import React, { Component } from 'react';
import Navigation from './view/Nav';
// import logo from './logo.svg';
// import './css/App.css';

// import { Jumbotron } from 'reactstrap';
// import { Site, Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';



class App extends Component {
    render() {
    return (
        <div className="site-wrapper-inner">

            <div className="cover-container">

                <div className="masthead clearfix">
                    <Navigation />
                </div>

                <div className="inner cover">
                    <h1 className="cover-heading">Porfolio</h1>
                    <p className="lead">This page will showcase Ian's skills and projects</p>
                    <p className="lead">
                        <Button color="danger" size="lg">Website Under Maintenance</Button>
                    </p>
                </div>

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
