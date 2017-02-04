import { combineReducers } from 'redux';
import LoggedReducer from './reducer_logged';
import CurrenUserReducer from './CurrenUserReducer';

const rootReducer = combineReducers({
  logged: LoggedReducer,
  currentUser: CurrenUserReducer
});

export default rootReducer;
