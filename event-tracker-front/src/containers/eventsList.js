import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getEvents } from '../actions/index'

class EventsList extends React.Component {

  componentDidMount() {
      this.props.getEvents()
  }

  render() {
    return(
      <h1>Rendering the events list</h1>
    )
  }
}



export default connect(null, { getEvents})(EventsList);