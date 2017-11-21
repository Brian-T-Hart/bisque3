import React, { Component } from "react";
import CustForm from "../components/CustForm";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/custAPI";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import VerticalMenu from "./VerticalMenu";

// import API from "../utils/API";

const Customers = () =>

<Container fluid>
  {/* Row #1 */}
  <Row fluid>
    <Col size="md-12">
      <Jumbotron>
        <h1><strong>Customers</strong></h1>
        <p>Quickly see all the customers you need to visit. </p>
      </Jumbotron>
    </Col>
  </Row>

  {/* Row #2 */}
  <Row fluid>
    {/* Vertical Menu */}
    <Col size="md-4">
      <VerticalMenu>
      </VerticalMenu>
    </Col>

    {/* Dashboard Content */}
    <Col size="md-8">
      <CustForm />
    </Col>
  </Row>
 

</Container>

export default Customers;
