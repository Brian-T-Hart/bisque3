import React, { Component } from "react";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import { List, ListItem } from "./List";
import DeleteBtn from "./DeleteBtn";
import CustTable from "./CustTable";
import CustForm from "./CustForm";

const Customers = () => (
  <div>
    <Jumbotron>
      <h1 className="heading">Customers</h1>
      <p className="sub-heading">View Customer Database</p>
    </Jumbotron>

    <CustForm />
    
    <CustTable />
  </div>
);

export default Customers;
