import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEvent} from '../actions'
// import { Button, ButtonGroup, Image } from 'react-bootstrap';
// import {getEvent} from '../actions/index'

class EventShow extends Component {

    // componentDidMount() {
    //     this.props.getEvent(this.props.match.params.id)
    // }

    render() {
        const { event, match, history } = this.props;
        console.log(this.props);
        return (
            <div className="container-fluid text-center">
                <h1>{event.title}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    const id = +ownProps.match.params.showId
    const event = state.events.events.find(event => event.id === id) || {}
    
    return {
        event: event}
    }

export default connect(mapStateToProps, null)(EventShow);