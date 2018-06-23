import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import EventsList from '../components/eventsList'
import EventsNew from './EventsNew'
import EventShow from './EventShow'
import EventsEdit from './EventsEdit'
// import { getEvents } from '../actions/index'

class EventsPage extends Component {

    render() {
      const { events, match } = this.props;
      
      return(
        <div className="container">
          <Switch>
            <Route exact path={match.url} render={() => (
              <EventsList events={events} />
            )}/>
          <Route path={`${match.url}/new`} component={EventsNew} />
          <Route exact path={`${match.url}/:showId`} component={EventShow}/>
          <Route exact path={`${match.url}/:showId/edit`} component={EventsEdit}/>
          </Switch>
        </div>
      )
    }
  }
  
  function mapStateToProps(state){
    return {events: state.events}
  }
  
  export default connect(mapStateToProps, null)(EventsPage);