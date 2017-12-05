import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
<<<<<<< HEAD
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import Nav from "../Nav";
import VerticalMenu from "../VerticalMenu";
// import { Link } from "react-router-dom";
=======
import Jumbotron from "../Jumbotron";
import "../Form/DataForm.css"
>>>>>>> master


class Sales extends Component {
  
  
<<<<<<< HEAD
    render(){
      return (
        <Container fluid>
        {/* Row #1 */}
  <Row fluid>
    <Col size="md-12 sm-12">
      <Jumbotron>
        <h1><strong>Sales Form</strong></h1>
        <p>Quickly see the sales and inventory levels. </p>
      </Jumbotron>
    </Col>
  </Row>

          <Row fluid>
            <Col size="md-6 md-offset-3 sm-6 sm-offset-3">
            <form>  
  <div class="form-group">
    <label for="exampleFormControlSelect1">Customers</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Snoop Dog</option>
      <option>Tom Petty</option>
      <option>Willie Nelson</option>
      <option>Bob Marley</option>
      <option>Jerry Garcia</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Products</label>
    <select class="form-control" id="exampleFormControlSelect2">
      <option>THC Drink</option>
      <option>Bread Loaf</option>
      <option>Gold Caps</option>
      <option>Cheesecake Decadence Bar</option>
      <option>Cannabis Granola</option>
    </select>
  </div>
  <label for="exampleFormControlSelect1">Sale Amount</label>
  <div class="input-group">  
   <span class="input-group-addon">$</span>  
   <input type="text" class="form-control" id="decimalPoint"  placeholder="Price"/>      
  </div>
  <div class="outer-money-div">
  <br/>
   <label for="exampleFormControlSelect1">Quantity</label>
    <div class="input-group">  
     <span class="input-group-addon"></span>  
     <input type="text" class="form-control"  placeholder="Number of items"/>      
=======
render(){
  return (
    <div>
      <Row fluid>
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h1><strong>Sales Form</strong></h1>
            <p>Quickly see the sales details.</p>
          </Jumbotron>
        </Col>
      </Row>
      <Row fluid>
        <Col size="md-8 md-offset-2 sm-8 sm-offset-2">
        <form class="DataForm">  
          <h2>Record Your Sales Below:</h2>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Customers</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Snoop Dog</option>
              <option>Tom Petty</option>
              <option>Willie Nelson</option>
              <option>Bob Marley</option>
              <option>Jerry Garcia</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">Products</label>
            <select class="form-control" id="exampleFormControlSelect2">
              <option>THC Drink</option>
              <option>Bread Loaf</option>
              <option>Gold Caps</option>
              <option>Cheesecake Decadence Bar</option>
              <option>Cannabis Granola</option>
            </select>
          </div>
          <label for="exampleFormControlSelect1">Sale Amount</label>
          <div class="input-group">  
          <span class="input-group-addon">$</span>  
          <input type="text" class="form-control" id="decimalPoint"  placeholder="Price"/>      
          </div>
          <div class="outer-money-div">
          <br/>
          <label for="exampleFormControlSelect1">Quantity</label>
            <div class="input-group">  
            <span class="input-group-addon"></span>  
            <input type="text" class="form-control"  placeholder="Number of items"/>      
            </div>
          </div>
          <div>
            <br/>
          <FormBtn>Submit</FormBtn>
          </div>
        </form>
      </Col>
    </Row>
>>>>>>> master
    </div>
      );
    }
  }
  
  export default Sales;