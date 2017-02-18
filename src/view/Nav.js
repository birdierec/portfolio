import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends Component {
    render(){
        return (

            <div className="inner">
                <h3 className="masthead-brand">birdiec.github.io</h3>
                <Nav className="nav-masthead">
                    <NavLink className="active" href="#">Home</NavLink>
                    <NavLink href="#">Features</NavLink>
                    <NavLink href="#">Contact</NavLink>
                </Nav>
            </div>
        );
    }
}

export default Navigation;