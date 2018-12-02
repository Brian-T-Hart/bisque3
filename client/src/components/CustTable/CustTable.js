import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import CustAPI from "../../utils/custAPI";
import PubSub from "pubsub-js";
import DeleteBtn from "../../components/DeleteBtn";
import { TableContainerCust, TableRow } from "../Table";
import "../../styles/Table.css";

class CustTable extends Component {
  state = {
    customers: []
  };
  z;

  componentWillMount() {
    this.token = PubSub.subscribe("UPDATE_LIST", this.loadCustomers.bind(this));
  }
  componentDidMount() {
    this.loadCustomers();
    PubSub.publish("UPDATE_LIST", this.token);
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  loadCustomers = () => {
    API.getAccounts({
      repRepId: localStorage.getItem("rep_id")
    })
      .then(res => {
        console.log(res);
        this.setState({ customers: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteCust = id => {
    CustAPI.deleteCust(id)
      .then(res => this.loadCustomers())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="xs-12">
              <div className="table-responsive customer-table">
                {this.state.customers.length ? (
                  <TableContainerCust>
                    {this.state.customers.map(customer => (
                      <TableRow key={customer.customer_id}>
                        <td>{customer.customer_id}</td>
                        <td>{customer.customer_firstname}</td>
                        <td>{customer.customer_lastname}</td>
                        <td>{customer.customer_company}</td>
                        <td>{customer.customer_phone}</td>
                        <td>{customer.customer_email}</td>
                        <td>{customer.customer_street}</td>
                        <td>{customer.customer_city}</td>
                        <td>{customer.customer_state}</td>
                        <td>{customer.customer_zipcode}</td>
                        <td>{customer.customer_notes}</td>
                      </TableRow>
                    ))}
                  </TableContainerCust>
                ) : (
                  <h3>No Records Available</h3>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CustTable;
