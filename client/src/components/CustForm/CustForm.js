import React, { Component } from "react";
import "./CustForm.css";


export default class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contact: '',
      company: '',
      email: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleCompanyChange(event) {
    this.setState({
      company: event.target.value
    })
  }

  handleSubmit () {
    // we would do something like this
    // fetch(`/api/user`, { method: 'post', body: {
    //   email: this.state.email,
    //   password: this.state.password
    // }}).then(res => {
    //   console.log('sucess!')
    // })

    
    // Validation part
    if (this.state.email === '') {
      alert('please enter an email')
    }
    
    // this would be replaced with an ajax post
    console.log({
      email: this.state.email,
      company: this.state.company
    })
  }

  render () {
    return (
      <div>
        <div>
          Email: 
          <input type='text' value={this.state.email} onChange={this.handleEmailChange} />
          <p>
            email: {this.state.email}
          </p>
        </div>
        <div>
          Company:
          <input type='text' value={this.state.company} onChange={this.handleCompanyChange} />
          <p>
            company: {this.state.company}
          </p>
        </div>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }
}
