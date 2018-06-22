import React from 'react';
import { connect } from 'react-redux';
import {getEvent} from '../actions/index'

class Event extends React.Component {

    componentDidMount() {
        this.props.getEvent(this.props.match.params.id)
    }

    render() {

        if(!this.props.event) {
            return <div>Getting event. please wait</div>
        }

        return (
            <div className="container">
                <h3>Title: {this.props.event.title}</h3>
                <h2>Is this working?</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {event: state.events.event}
}

export default connect(mapStateToProps, {getEvent} )(Event);