import React, { Component } from 'react';
// import { Nav, NavLink } from 'reactstrap';
import { Button } from 'reactstrap';

class Covers extends Component {
    constructor(props) {
        super(props);
        // this.state = {content: this.props.content} ;
        console.debug(this.state);
        console.debug(this.props);
    }

    // componentWillReceiveProps(nextProp) {
    //     console.debug(nextProp);
    //     this.setState({content: this.props.content});
    // }

    render(){
        let content = null
        switch(this.props.content) {
            case 'contact':
                content = <Contact />;
                break;
            case 'feat':
                content = <Feature />;
                break;
            case 'home':
            default:
                content = <Home />;
                break
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

function Home() {
    return (
        <div className="inner cover">
            <h1 className="cover-heading">Home</h1>
            <p className="lead">This page will showcase Ian's skills and projects</p>
            <p className="lead">
                <Button color="danger" size="lg">Website Under Maintenance</Button>
            </p>
        </div>
    );
}

function Contact() {
    return (
        <div className="inner cover">
            <h1 className="cover-heading">Contact</h1>
            <p className="lead">This page will showcase Ian's skills and projects</p>
            <p className="lead">
                <Button color="success" size="lg">Website Under Maintenance</Button>
            </p>
        </div>
    );
}

function Feature() {
    return (
        <div className="inner cover">
            <h1 className="cover-heading">Features</h1>
            <p className="lead">This page will showcase Ian's skills and projects</p>
            <p className="lead">
                <Button color="primary" size="lg">Website Under Maintenance</Button>
            </p>
        </div>
    );
}


export default Covers;
