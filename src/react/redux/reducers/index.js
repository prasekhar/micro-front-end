import { combineReducers } from 'redux';

import taskReducer from './tasks';
import contactsReducer  from './contacts';
import eventsReducer from './events';

export default combineReducers({
  taskReducer,
  contactsReducer, 
  eventsReducer
});
