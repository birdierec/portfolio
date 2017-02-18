import React, { Component } from 'react';
import Navigation from './view/Nav';
// import logo from './logo.svg';
// import './css/App.css';

import { Jumbotron } from 'reactstrap';
import { Site, Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';



class App extends Component {
    render() {
    return (
     <div className="site-wrapper">

        <div className="site-wrapper-inner">

            <div className="cover-container">

                <div className="masthead clearfix">
                    <Navigation />
                </div>

                <div className="inner cover">
                    <h1 className="cover-heading">Cover your page.</h1>
                    <p className="lead">fdsfCover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p className="lead">
                        <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                    </p>
                </div>

                <div className="mastfoot">
                    <div className="inner">
                        // <p>Cover template for <a href="https://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                    </div>
                </div>

            </div>

        </div>

    </div>

    );
    }
}

export default App;
