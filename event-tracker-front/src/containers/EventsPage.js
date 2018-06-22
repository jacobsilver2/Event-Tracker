import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import EventsList from '../components/eventsList'
import EventsNew from './EventsNew'
import { getEvents } from '../actions/index'

class EventsPage extends React {

    render() {
      const { events, match } = this.props;

      return(
        <div className="container">
          <Switch>
            <Route exact path={match.url} render={() => (
              <EventsList events={events} />
            )}/>
          <Route path={`${match.url}/new`} component={EventsNew} />
          </Switch>
        </div>
      )
    }
  }
  
  function mapStateToProps(state){
    return {events: state.events}
  }
  
  export default connect(mapStateToProps, { getEvents })(EventsPage);