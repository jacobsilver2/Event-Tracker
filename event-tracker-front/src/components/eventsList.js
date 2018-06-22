import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Event from '../components/eventShow'

const EventsList = ({ events }) => {
  
  const renderEvents = events.map((event) => {
    return (
      <li key={event.id}>
        <Link to={`events/${event.id}`}>{event.title}</Link>
      </li>
    )
  })

  return (
    <div className="col-sm">
      {renderEvents}
    <Route path={`/events/:id`} component={Event} />
    </div>
  )
};

export default EventsList;