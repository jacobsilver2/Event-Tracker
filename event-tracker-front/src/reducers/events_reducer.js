export default (state={events: [] }, action) => {
  switch(action.type) {
    case 'GET_EVENTS':
      return { ...state, events: action.events}
    case 'ADD_EVENT':
      return {events: [...state.events, action.event]}
    case 'REMOVE_EVENT':
      return {events: state.events.filter(event => event.id !== action.event)};
    case 'EDIT_EVENT':
      state.events.map((event) => {
        if (event.id === action.event.id) {
          event.title = action.event.title
        }
      });
    return {...state, event: action.event};
    default:
        return state
  }
}