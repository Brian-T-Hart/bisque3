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

const Schedule = () =>

<div>
  <Jumbotron>
    <h1 className="heading">Schedule</h1>
    <p className="sub-heading">Plan Client Meetings and Product Deliveries</p>
  </Jumbotron>

    {/* Schedule Content */}
    <Row>
    <Col size="md-10 sm-10">
      <CustSchedule />
    </Col>
  </Row>
  <Row>
    <Col size="sm-12">
      <CalForm />
      <CalTable/>
    </Col>
  </Row>


    {/*MAP TESTING*/}
    <Container>
      <Row>
          <Col size="md-10 sm-10">
              <div className='private text-center'>
              <CustMap />
              </div>
          </Col>
      </Row>
    </Container> 


</div>
export default Schedule;