import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Navigator from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
        <div className="site-wrapper-inner">

            <div className="cover-container">

                <Navigator location={location} />

                {this.props.children}

                <Footer/>

            </div>

        </div>

    );
  }
}
