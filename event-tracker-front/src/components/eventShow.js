import React from 'react';

class ShowEvent extends React.Component {


    render() {
        return (
            <div className="container">
                <h3>Title: {this.props.params.title}</h3>
            </div>
        )
    }
}

export default ShowEvent;