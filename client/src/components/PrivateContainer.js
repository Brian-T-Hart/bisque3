import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import PrivateNav from "./PrivateNav";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import Products from "./Products";
import Schedule from "./Schedule";
import Sales from "./Sales/Sales";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class PrivateContainer extends Component {
  state = {
    currentPage: "Dashboard"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Dashboard") {
      return <Dashboard />;
    } else if (this.state.currentPage === "Customers") {
      return <Customers />;
    } else if (this.state.currentPage === "Products") {
      return <Products />;
    } else if (this.state.currentPage === "Sales") {
      return <Sales />;
    } else if (this.state.currentPage === "Schedule") {
      return <Schedule />;
    }
  };

  render() {
    return (
      <div id="private-container">
        <PrivateNav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {/* Based on `this.state.currentPage`, render the appropriate component here. */}
        {this.renderPage()}
      </div>
    );
  }
}

export default PrivateContainer;
