import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";		
import { Input, FormBtn } from "./Form";		
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";		
import VerticalMenu from "./VerticalMenu";
import API from "../utils/API";		
import { Link } from "react-router-dom";
import Chart from './Chart';

const Dashboard = () =>

<<<<<<< HEAD
<Container fluid>


=======
<div>
>>>>>>> master
  {/* Row #1 */}
  <Row fluid>
    <Col size="md-12">
      <Jumbotron>
        <h1><strong>Dashboard</strong></h1>
        <p>Quickly see the sales and inventory levels. </p>
      </Jumbotron>
    </Col>
  </Row>

<<<<<<< HEAD
    {/* Row #2 */}
    <Row fluid>
      {/* Vertical Menu */}
      <Col size="md-2">
        <VerticalMenu />
      </Col>

      

      {/* Dashboard Content */}
      <Col size="md-10">
=======
      {/* Dashboard Content */}
  <Row>
      <Col size="md-12 sm-12">
>>>>>>> master
        <div className='private text-center'>
          <Chart/>
        </div>
      </Col>
    </Row>
</div>

export default Dashboard;