import { SEND_EVENT  } from '../action-types';

export const sendEvent = payload =>  dispatch =>
dispatch({
  type: SEND_EVENT, 
  payload: payload
});

