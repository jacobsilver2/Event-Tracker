import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import EventsList from '../containers/eventsList'
import NewEvent from '../containers/eventsNew'
import ShowEvent from '../components/eventShow'


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
          <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
          <NavLink style={{ marginRight: '10px' }} to="/events">See All The Events</NavLink>
          <NavLink style={{ marginRight: '10px' }} to="/events/new">Create A New Event</NavLink>
        </div>
          <Route exact path="/events" component={EventsList} />
          <Route exact path="/events/new" component={NewEvent}/>
          <Route exact path="events/:id" component={ShowEvent}/>
        </div>
      </Router>
    );
  }
}

export default App;
