import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import Covers from './Covers';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'home'};
    }

    handleClick(val) {
        this.setState({value: val});
        // console.log(val);
    }

    // updateCover() {
    //     console.log(this.state.value);
    //     return (
    //         <Covers content={this.state.value} />
    //     );
    // }

    render(){
        // let cont = this.updateCover();

        return (
            <div>
                <div className="masthead clearfix">
                    <div className="inner">
                        <h3 className="masthead-brand">Ian Calaunan's Portfolio</h3>
                        <Nav className="nav-masthead">
                            <NavLink active href="#"
                                onClick={(e) => this.handleClick('home')}>Home</NavLink>
                            <NavLink href="#"
                                onClick={(e) => this.handleClick('feat')}>Features</NavLink>
                            <NavLink href="#"
                                onClick={(e) => this.handleClick('contact')}>Contact</NavLink>
                        </Nav>
                    </div>
                </div>
                <Covers content={this.state.value} />
            </div>
        );
    }
}

export default Navigation;
