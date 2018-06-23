import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Event from '../containers/EventShow'
import EventsListItem from '../components/EventsListItem'
import { Button } from 'react-bootstrap';

const EventsList = ({ events }) => {
  
  const renderEvents = events.events.map((event) => 
    <EventsListItem event={event} key={event.id}/>
  )

  return (
    <div className="col-sm">
      {renderEvents}
    <Route path={`/events/:id`} component={Event} />
    </div>
  )
};

export default EventsList;