import React from "react";
import { IndexLink, Link } from "react-router";
import { Nav, NavLink } from 'reactstrap';

export default class Navigator extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  navigate() {
    this.props.history.replaceState(null, "/");
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;

    // const homeClass = location.pathname === "/" ? "active" : "";
    const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";
    const featuresClass = location.pathname.match(/^\/features/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <div>
          <div className="masthead clearfix">
              <div className="inner">
                  <h3 className="masthead-brand">Ian Calaunan's Portfolio</h3>
                  <Nav className="nav-masthead">
                        <IndexLink to="/" activeClassName="active" className="nav-link">
                            Home
                        </IndexLink>
                        <Link to="features" activeClassName="active" className="nav-link">
                            Features
                        </Link>
                        <Link to="contact" activeClassName="active" className="nav-link">
                            Contact
                        </Link>
                  </Nav>
              </div>
          </div>
      </div>
    );
  }
}
