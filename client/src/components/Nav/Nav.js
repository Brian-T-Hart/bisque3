import React, { Component } from "react";
import "../../styles/Nav.css";
import { Col, Row, Container } from "../Grid";

class Nav extends Component {
  state = {
    activeTabName: "home"
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return ( 
      <nav className="navbar-default navbar-fixed-top">
        <Container>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-right">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand animated bounceInDown" href="/"><span className="glyphicon glyphicon-briefcase"></span>&nbsp;
          Goal Post</a>
          </div>
          <div className="collapse navbar-collapse pull-sm-right" id="collapse-right">
            <ul className="nav navbar-nav navbar-right ml-auto">
              <li>
                <a href="/"><span className="glyphicon glyphicon-home"></span>&nbsp;&nbsp;Home</a>
              </li>
              <li>
                <a href="/#features"><span className="glyphicon glyphicon-info-sign"></span>&nbsp;&nbsp;Features</a>
              </li>
              <li>
                <a href="/#testimonials"><span className="glyphicon glyphicon-comment"></span>&nbsp;&nbsp;Testimonials</a>
              </li>
              <li>
                <a href="/#team"><span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;Team</a>
              </li>
              <li>
                <a href="/contact"><span className="glyphicon glyphicon-envelope"></span>&nbsp;&nbsp;Contact Us</a>
              </li>
              <li>
                <a href="/login"><span className="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;Login/Register</a>
              </li>
            </ul>
          </div>
        </Container>
        </nav>
    );
  }
}

export default Nav;