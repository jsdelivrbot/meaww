import { combineReducers } from 'redux';
import LoggedReducer from './reducer_logged';

const rootReducer = combineReducers({
  logged: LoggedReducer
});

export default rootReducer;
