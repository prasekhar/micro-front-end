import { ADD_TASK  } from '../action-types';

export const addTask = payload =>  dispatch =>
dispatch({
  type: ADD_TASK, 
  payload: payload
});

