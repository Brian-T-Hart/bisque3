import React, { Component } from "react";
import "./CustForm.css";


export default class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contactName: '',
      company: '',
      email: '', 
      address: '',
      phone: '',
      rating:'',
      notes: '',
      dateVisited:'',
      active: ''

    }

    

    this.handleContactNameChange = this.handleContactNameChange.bind(this)
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
    this.handleDateVisitedChange = this.handleDateVisitedChange.bind(this)
    this.handleActiveChange = this.handleActiveChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleContactNameChange(event) {
    this.setState({
      contactName: event.target.value
    })
  }

  handleCompanyChange(event) {
    this.setState({
      company: event.target.value
    })
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleAddressChange(event) {
    this.setState({
      address: event.target.value
    })
  }  

  handlePhoneChange(event) {
    this.setState({
      phone: event.target.value
    })
  }   

  handleRatingChange(event) {
    this.setState({
      rating: event.target.value
    })
  }   

  handleNotesChange(event) {
    this.setState({
      notes: event.target.value
    })
  }     

  handleDateVisitedChange(event) {
    this.setState({
      dateVisited: event.target.value
    })
  }   

  handleActiveChange(event) {
    this.setState({
      active: event.target.value
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
    if (this.state.contactName === '') {
      alert('please enter an name')
    }
    if (this.state.company === '') {
      alert('please enter a company name')
    }
    if (this.state.address === '') {
      alert('please enter an address')
    }
    if (this.state.phone === '') {
      alert('please enter a phone')
    }
    if (this.state.rating === '') {
      alert('please enter an rating')
    }
    if (this.state.notes === '') {
      alert('please enter an notes')
    }
    if (this.state.email === '') {
      alert('please enter an email')
    }
    if (this.state.dateVisited === '') {
      alert('please enter an dateVisited')
    }
    if (this.state.active === '') {
      alert('please enter an active')
    }
    
    // this would be replaced with an ajax post
    console.log({
      name: this.state.contactName,
      company: this.state.company,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
      rating: this.state.rating,
      notes: this.state.notes,
      dateVisited: this.state.dateVisited,
      active: this.state.active
    })
  }

  
  render () {
    return (
      <div>
        <form ref="customerForm">
        <div>
          Buyer Name:
          <input type='text' value={this.state.contactName} onChange={this.handleContactNameChange} />
          <p>
          Buyer Name: {this.state.contactName}
          </p>
        </div>
        <div>
          Company:
          <input type='text' value={this.state.company} onChange={this.handleCompanyChange} />
          <p>
          Company: {this.state.company}
          </p>
        </div>
        <div>
          Email: 
          <input type='text' value={this.state.email} onChange={this.handleEmailChange} />
          <p>
          Email: {this.state.email}
          </p>
        </div>
        <div>
          Address:
          <input type='text' value={this.state.address} onChange={this.handleAddressChange} />
          <p>
          Address: {this.state.address}
          </p>
        </div>
        <div>
          Phone:
          <input type='text' value={this.state.phone} onChange={this.handlePhoneChange} />
          <p>
          Phone: {this.state.phone}
          </p>
        </div>
        <div>
          Rating:
          <input type='text' value={this.state.rating} onChange={this.handleRatingChange} />
          <p>
          Rating: {this.state.rating}
          </p>
        </div>
        <div>
          Notes:
          <input type='text' value={this.state.notes} onChange={this.handleNotesChange} />
          <p>
          Notes: {this.state.notes}
          </p>
        </div>
        <div>
          Date Visited:
          <input type='text' value={this.state.dateVisited} onChange={this.handleDateVisitedChange} />
          <p>
          Date Visited: {this.state.dateVisited}
          </p>
        </div>
        <div>
          Active:
          <input type='text' value={this.state.active} onChange={this.handleActiveChange} />
          <p>
          Active: {this.state.active}
          </p>
        </div>
        </form>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }
}
