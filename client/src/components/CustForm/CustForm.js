import React, { Component } from "react";
import "./CustForm.css";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/custAPI.js";


class Form extends Component {
  state = {
    customers: [],
    contactName: '',
    company: '',
    email: '', 
    address: '',
    phone: '',
    rating:'',
    notes: '',
    dateVisited:'',
    active: ''
  };

  componentsDidMount() {
    this.loadCusts();
  }

  loadCusts = () => {
    API.getCusts()
    .then(res =>
    this.setState({ customers: res.data, contactName: "", 
    company: "", email: "", address: "", phone: "", rating: "",
    notes: "", dateVisited: "", active: ""})
  )
  .catch(err => console.log(err));
  };

  deleteCust = id => {
    API.deleteCust(id)
    .then(res => this.loadCusts())
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name] : value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.contactName && this.state.company) {
      API.saveCust({
        contactName: this.state.contactName,
        company: this.state.company,
        email: this.state.email, 
        address: this.state.address,
        phone: this.state.phone,
        rating: this.state.rating,
        notes: this.state.notes,
        dateVisited: this.state.dateVisited,
        active: this.state.active
      })
      .then(res => this.loadCusts())
      .catch(err => console.log(err));
    }
  };
  
  render () {
    return (
      <Container fluid>
      <Row>
        <Col size="md-6">
          <form>
            <Input
              value={this.state.contactName}
              onChange={this.handleInputChange}
              name="contactName"
              placeholder="Contact Name (required)"
            />
            <Input
              value={this.state.company}
              onChange={this.handleInputChange}
              name="company"
              placeholder="Company Name (required)"
            />
            <TextArea
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              placeholder="Email (required)"
            />
            <FormBtn
              disabled={!(this.state.contactName && this.state.company)}
              onClick={this.handleFormSubmit}
            >
              Submit Customer
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6">
          {this.state.customers.length ? (
            <List>
              {this.state.customers.map(customer => {
                return (
                  <ListItem key={customer._id}>
                    <a href={"/customers/" + customer._id}>
                      <strong>
                        {customer.contactName} by {customer.company}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.deleteCust(customer._id)} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}
}

export default Form;
