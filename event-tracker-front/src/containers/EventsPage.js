import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { getEvents } from '../actions/index'
import EventsList from '../components/eventsList'



class EventsPage extends React.Component {

    componentDidMount() {
        this.props.getEvents()
    }
  
    render() {
      return(
        <div className="container">
          <h1>...listing all the events...</h1><br/>
          <ul>
            <EventsList events={this.props.events}/>
          </ul>
        </div>
      )
    }
  }
  
  function mapStateToProps(state){
    return {events: state.events.events}
  }
  
  export default connect(mapStateToProps, { getEvents })(EventsPage);