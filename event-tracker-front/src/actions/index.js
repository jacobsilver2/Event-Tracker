
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
export const getEvents = () => {
  return dispatch => {
    return fetch(`${api_URL}/events`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(events => {
      dispatch(setEvents(events))
    })
    .catch(error => console.log(error));
  }
}

export const createEvent = (event, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({event: event})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(event => {
      dispatch(addEvent(event))
      routerHistory.replace(`/events/${events.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace('/events/new');
     })
  }
}

export const editEvent = (event, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/events/${event.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({event: event})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(event => {
      dispatch(updateTrail(event))
      routerHistory.replace(`/events/${event.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace('/events');
     })
  }
}

export const deleteEvent = (eventId, routerHistory) => {
  return dispatch => {
    return fetch(`${api_URL}/events/${eventId}`, {
      method: "DELETE",
    })
    .then(response => {
      routerHistory.replace('/events');
      dispatch(removeEvent(eventId));
    })
    .catch(error => console.log(error))
  }
}

function handleErrors(response){
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
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



