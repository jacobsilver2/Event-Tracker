import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { getEvents } from '../actions/index'


class EventsList extends React.Component {

  componentDidMount() {
      this.props.getEvents()
  }

  renderEvents(){
    return this.props.events.map( (event) => {
      return (
        <li key={event.id}>
        <Link to={`events/${event.id}`}>
          <h4>{event.title}</h4>
        </Link>
        </li>
      )
    })
  }
  render() {
    return(
      <div className="container">
        <h1>...Listing all the new events</h1><br/>
        <ul>
          {this.renderEvents()}
        </ul>

        <Link to="/events/new" className="btn btn-warning">Create A New Event </Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {events: state.events.events}
}

export default connect(mapStateToProps, { getEvents})(EventsList);