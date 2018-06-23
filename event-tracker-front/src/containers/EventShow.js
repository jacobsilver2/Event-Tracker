import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEvent} from '../actions'
import { Button, ButtonGroup, Image } from 'react-bootstrap';

class EventShow extends Component {

    // componentDidMount() {
    //     this.props.getEvent(this.props.match.params.id)
    // }

    render() {
        const { event, match, history } = this.props;
        
        return (
            <div className="container-fluid text-center">
                <h1>{event.title}</h1>
            
                <ButtonGroup>
                    <Button 
                        className="btn btn-outline-danger"
                        onClick={ () =>  deleteEvent(event.id, history) }>
                        <span className="glyphicon glyphicon-pencil"></span> Delete Event
                    </Button>

                    <Button className="btn btn-outline-secondary">
                        <Link key={event.id} to={`/events/${event.id}/edit`}>
                            <span className="glyphicon glyphicon-pencil"></span> Edit Event
                        </Link>
                    </Button>
                </ButtonGroup>
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

export default connect(mapStateToProps, {deleteEvent})(EventShow);