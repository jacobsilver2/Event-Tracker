import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../actions'
import { Button } from 'react-bootstrap'

class EventsNew extends React.Component {

  constructor(){
    super()
    this.state = {
      title: ''
    }
  }
  

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    console.log("handle on submit was called");
  }

  render() {
    return(
      <div className="container-fluid text-center">
        <form style={{ marginTop: '20px' }} onSubmit={this.handleOnSubmit} >
          <label>
            Title: <br></br>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Event Title"
              value={this.state.title}
              onChange={this.handleOnChange}
            
            />
          </label>
        </form>
      
      
      </div>
    )
  }
}



export default connect(null, {createEvent})(EventsNew);