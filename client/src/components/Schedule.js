import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import CustSchedule from "./CustSchedule";
import CustMap from "./CustMap";
import CalTable from "./CalTable";
import CalForm from "./CalForm";

const Schedule = () => (
  <div>
    <Jumbotron>
      <h1 className="heading">Schedule</h1>
      <p className="sub-heading">Plan Client Meetings and Product Deliveries</p>
    </Jumbotron>

    {/* Schedule Content */}
    <Container>
      <Row>
        <Col size="xs-12">
          <CustSchedule />
        </Col>
      </Row>
      <Row>
        <Col size="xs-12">
          <CalForm />
          <CalTable />
        </Col>
      </Row>
    </Container>

    {/*MAP TESTING*/}
    {/* <Container>
      <Row>
        <Col size="xs-8 xs-offset-2">
            <CustMap />
        </Col>
      </Row>
    </Container> */}
  </div>
);
export default Schedule;
