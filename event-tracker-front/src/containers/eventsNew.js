import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import { createEvent } from '../actions/index'

class NewEvent extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    debugger
    this.props.createEvent(props)
  }

  render() {
    const {fields:{title}, handleSubmit} = this.props
    return(
      <div className="container">
        <h1>Create A New Event</h1>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title}/>
          </div>
          <button type="submit" className="btn btn-success">Create Event</button>
        </form>
      </div>
    )
  }
}

const EventForm = reduxForm({
  form: 'newEventForm', 
  fields: ['title']
}, null, {createEvent})(NewEvent);

export default EventForm;