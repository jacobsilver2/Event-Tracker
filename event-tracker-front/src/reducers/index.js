import { combineReducers } from 'redux';
import EventsReducer from './events_reducer'

const allReducers = combineReducers({
  events: EventsReducer
})

export default allReducers;