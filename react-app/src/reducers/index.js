import people from './cart-reducer.js';
import event from './event/event-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people,
  event
});

export default rootReducer;