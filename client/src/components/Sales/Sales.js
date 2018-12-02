import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../Grid";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/salesAPI.js";
import Jumbotron from "../Jumbotron";
import "../Form/DataForm.css";
import PubSub from 'pubsub-js';
import { TableContainerSales, TableRow} from "../Table";
import "../../styles/Table.css";

class Sales extends Component {
  state = {
    sales: []
  }; 

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name] : value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveSale({
      sale_customer: this.state.sale_customer,
      sale_product: this.state.sale_product,
      sale_quantity: this.state.sale_quantity,
      sale_purchasePrice: this.state.sale_purchasePrice,
      sale_note: this.state.sale_note,
      repRepId: localStorage.getItem('rep_id')
    })
    .then(res => {
      console.log('loadSales.sales.js', res);
      this.loadSales();
    })
    .catch(err => console.log(err));

    //Clear form data after submit
    this.setState({
      username: "",
      password: "",
      passwordConfirm: "",
      email: ""
    });
  };

  componentWillMount() {
    this.token = PubSub.subscribe('UPDATE_LIST', this.loadSales.bind(this));
  }

  componentDidMount() {
    this.loadSales();
    PubSub.publish('UPDATE_LIST', this.token)
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  deleteSale = (id) => {
    console.log("Attempting to delete", id);
    API.deleteSale(id) 
      .then(res => {
        console.log("response from deleteSale", res)})
        .then(res => this.loadSales())
      .catch(err => console.log(err));
    }

  loadSales = () => {
    API.getSales({
      repRepId: localStorage.getItem('rep_id')
    })
    .then(res => {
      console.log('response to load sales.. sales js');
      console.log(res);
      if (res.data) {
        this.setState({
          sales: res.data
      })
     }})
     .catch(err => {
        console.log(err)
     }) 
  };

  addClassToEvenRow = () => {
    var rows = document.getElementByClassName('table').getElementsByTagName('tr');
    for(var x = 0; x < rows.length; x++) {
        rows[x].className = (x % 2 === 0) ? 'even' : 'odd';
    }
  };
  
render(){
  return (
    <div>
      {/* Sales Form */}
      <Jumbotron>
        <h1 className="heading">Sales History</h1>
        <p className="sub-heading">Record and View Sales Details</p>
      </Jumbotron>

      <Container>
        <Row>
          <Col size="xs-12">
          <center>
            <form className="form-form-horizontal DataForm">  
              <h2>Record a Sales Transaction</h2>

              <Col size="xs-12">
                {/* <label htmlFor="sale_customer">Customer:</label> */}
                <Input
                  value={this.state.sale_customer}
                  onChange={this.handleInputChange}
                  name="sale_customer"
                  placeholder="Customer Name"
                  required
                />
              </Col>

              <Col size="xs-4">
                {/* <label htmlFor="sale_product">Products Sold:</label> */}
                <Input
                  value={this.state.sale_product}
                  onChange={this.handleInputChange}
                  name="sale_product"
                  placeholder="Products Sold"
                  required
                />
              </Col>

              <Col size="xs-4">
                {/* <label htmlFor="sale_quantity">Quantity Sold:</label> */}
                <Input
                  value={this.state.sale_quantity}
                  onChange={this.handleInputChange}
                  name="sale_quantity"
                  placeholder="Quantity Sold"
                  required
                />
              </Col>
              <Col size="xs-4">
                {/* <label htmlFor="sale_purchasePrice">Price:</label> */}
                <div className="input-group">  
                  <span className="input-group-addon">$</span> 
                  <Input
                    value={this.state.sale_purchasePrice}
                    onChange={this.handleInputChange}
                    name="sale_purchasePrice"
                    placeholder="Price"
                    required
                  />
                </div>
              </Col>

              <Col size="xs-12">
                {/* <label htmlFor="sale_note">Sale Note:</label> */}
                  <Input
                    value={this.state.sale_note}
                    onChange={this.handleInputChange}
                    name="sale_note"
                    placeholder="Notes"
                    required
                  />
              </Col>
              <FormBtn 
                type="submit"
                onClick={this.handleFormSubmit}>Record Transaction
              </FormBtn>
            </form>         
           </center>
          </Col>
        </Row>
      </Container>
          
        {/* Sales Table */}
      <Container>
        <Row>
          <Col size="xs-12">
            <div className='text-center table-responsive table-hover sales-table'>
              {this.state.sales.length ? (
                <TableContainerSales>
                  {this.state.sales.map(sale => (
                    <TableRow key={sale.sale_id}>
                        <td>{sale.sale_id}</td>
                        <td>{sale.sale_customer}</td>
                        <td>{sale.sale_product}</td>
                        <td>{sale.sale_quantity}</td>
                        <td>{sale.sale_purchasePrice}</td>
                        <td>{sale.sale_note}</td>
                    </TableRow>
                  ))}
                </TableContainerSales>
              ) : (
                <h3>No Records Available</h3>
                )}
            </div>
          </Col>
        </Row>
    </Container>
  </div>

)
// {this.addClassToEvenRow()}; 
}
  }
  
  export default Sales;