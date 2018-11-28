import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";		
import { Input, FormBtn } from "./Form";		
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";		
import VerticalMenu from "./VerticalMenu";
import API from "../utils/API";		
import { Link } from "react-router-dom";
import Chart from "./Chart";

const Dashboard = () =>

<div>
    <Jumbotron>
      <h1 className="heading">Dashboard</h1>
      <p className="sub-heading">Quickly See Weekly Sales Progress</p>
    </Jumbotron>

      {/* Dashboard Content */}
    <Container className='private text-center'>
       <Row>
        <Col size="xs-12">
          <Chart />
        </Col>
      </Row>
    </Container>
</div>

export default Dashboard;
