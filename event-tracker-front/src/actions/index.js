// import fetch from 'isomorphic-fetch';
import { GET_EVENTS, CREATE_EVENT, GET_EVENT, LOADING_EVENTS } from './types'
import axios from 'axios'

const api_URL = 'http://localhost:5000/api/v1'

// export function getEvents() {
//   return function(dispatch) {  
//     dispatch({type: LOADING_EVENTS})
//     return fetch(`${api_URL}/events`)
//     .then(response => {
//     return response.json()
//     }).then(responseJSON => {
//       console.log(responseJSON);
//     dispatch({type: GET_EVENTS, payload: responseJSON})
//   })
// }
// }

export function getEvents() {
  const request = axios.get(`${api_URL}/events`);
  return {
    type: GET_EVENTS,
    payload: request
  }
}

export function createEvent(props) {
  const request = axios.post(`${api_URL}/events`, props);
  return {
    type: CREATE_EVENT,
    payload: request
  };
}

export function getEvent(id){
  const request = axios.get(`${api_URL}/events/${id}`);
  return {
    type: GET_EVENT,
    payload: request
  };
}


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



