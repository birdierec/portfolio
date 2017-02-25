import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import 'bootstrap/dist/css/bootstrap.css';
import './css/cover.css';
import './css/carousel.css';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Features from "./pages/Features";

import Layout from "./pages/Layout";

// import Archives from "./pages/Archives";
// import Featured from "./pages/Featured";
// import Settings from "./pages/Settings";

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/features" component={Features}></Route>
    </Route>
  </Router>,
app);

