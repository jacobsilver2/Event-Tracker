import fetch from 'isomorphic-fetch';
import { GET_EVENTS, LOADING_EVENTS } from './types'

const api_URL = 'http://localhost:5000/api/v1'

export function getEvents() {
  return function(dispatch) {  
    dispatch({type: LOADING_EVENTS})
    return fetch(`${api_URL}/events`)
    .then(response => {
    return response.json()
    }).then(responseJSON => {
      console.log(responseJSON);
    dispatch({type: GET_EVENTS, payload: responseJSON})
  })
}
}

