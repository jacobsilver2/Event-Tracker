import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { getEvents } from '../actions/index'


class EventsList extends React.Component {

  componentDidMount() {
      this.props.getEvents()
  }

  render() {
    return(
      <div className="container">
        <h1>Rendering the events list</h1>
        <Link to="/events/new" className="btn btn-warning">Create A New Event </Link>
      </div>
    )
  }
}



export default connect(null, { getEvents})(EventsList);