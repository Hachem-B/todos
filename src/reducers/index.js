import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({//turns different reducers into a single reducing function
  todos,
  visibilityFilter
});