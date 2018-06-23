import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../actions'
import { Button } from 'react-bootstrap'

class EventsNew extends Component {
  constructor(){
    super()

    this.state = {
      title: ''
    }
  }
  

  handleOnChange = e => {
    // console.log("handle on change is firing");
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state);
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const { createEvent, history } = this.props;
    // console.log(createEvent);
    createEvent(this.state, history);
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
          </label><br></br>
          <Button className="btn btn-outline-primary" type="submit">
            <span className="glyphicon glyphicon-ok"></span>
            Add Event
          </Button>
        </form>
      
      
      </div>
    )
  }
}



export default connect(null, {createEvent})(EventsNew);