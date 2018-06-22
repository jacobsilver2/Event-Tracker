import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './home';
import EventsPage from '../containers/EventsPage';
import Home from '../components/home';
import { getEvents } from '../actions/index';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/events" component={EventsPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, {getEvents})(App)
