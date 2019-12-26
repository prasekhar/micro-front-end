import { ADD_CONTACT  } from '../action-types';

export const addContact = payload =>  dispatch =>
dispatch({
  type: ADD_CONTACT, 
  payload: payload
});

