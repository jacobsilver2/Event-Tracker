import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EventsListItem extends Component {



  render() {
    return(
      <div className="col-sm-4" style={{marginTop: '30px'}}>
        <div className="container-fluid text-center">
          <h3>
            <Link key={this.props.event.id} to={`/events/${this.props.event.id}`}>{this.props.event.title}</Link>
          </h3>
        </div>
      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    events: state.events
  }
 }
export default connect(mapStateToProps, null)(EventsListItem);