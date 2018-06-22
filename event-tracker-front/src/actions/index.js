// import fetch from 'isomorphic-fetch';
import { GET_EVENTS, CREATE_EVENT, GET_EVENT, LOADING_EVENTS } from './types'
import axios from 'axios'

const api_URL = 'http://localhost:5000/api/v1'


//Event Action Creators
export const setEvents = events = {
  return {
    type: 'GET_EVENTS',
    events
  }
}

export const addEvent = event => {
  return {
    type: 'ADD_EVENT',
    event
  }
}

export const removeEvent = event => {
  return {
    type: 'REMOVE_EVENT',
    event
  }
}

export const updateEvent = event => {
  return {
    type: 'EDIT_EVENT',
    event
  }
}

// Events Async Actions
export const getEvents = () {
  return dispatch => {
    
  }
}



// export function getEvents() {
//   const request = axios.get(`${api_URL}/events`);
//   return {
//     type: GET_EVENTS,
//     payload: request
//   }
// }

// export function createEvent(props) {
//   const request = axios.post(`${api_URL}/events`, props);
//   return {
//     type: CREATE_EVENT,
//     payload: request
//   };
// }

// export function getEvent(id){
//   const request = axios.get(`${api_URL}/events/${id}`);
//   return {
//     type: GET_EVENT,
//     payload: request
//   };
// }


// export function createEvent(props) {
//   return function(dispatch) {  
//     fetch(`${api_URL}/events`, {
//       method: 'post',
//       body: JSON.stringify(props)
//     })
//     .then(response => {
//     return response.json()
//     }).then(responseJSON => {
//       console.log(responseJSON);
//       dispatch({type: CREATE_EVENT, payload: responseJSON})
//   })
// }
// }



