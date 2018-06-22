import { GET_EVENTS, LOADING_EVENTS, GET_EVENT } from '../actions/types'

const INITIAL_STATE = {loading: false, events: [], event: null };

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case LOADING_EVENTS:
      return Object.assign({}, state, {loading: true})
    case GET_EVENTS:
      return {loading: false, events: action.payload.data}
    case GET_EVENT:
      return { ...state, event: action.payload.data }
    default:
        return state
  }
}