import React, { Component } from "react";
import "./CustForm.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    buyerName: "",
    address: "",
    status: "",
    purchased: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "status") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    this.setState({
      buyerName: "",
      address: "",
      status: "",
      purchased: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (

      <div>
        <form className="form">
          <input
            value={this.state.buyerName}
            name="buyerName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Buyer Name"
          />
          <input
            value={this.state.address}
            name="address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Address"
          />
          <input
            value={this.state.status}
            name="status"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Status"
          />
          <input
            value={this.state.purchased}
            name="purchased"
            onChange={this.handleInputChange}
            type="text"
            placeholder="purchased yes or no"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
