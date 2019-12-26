import { SEND_EVENT } from '../action-types';

const STATE_INIT = {
  event: {}
};

export default (state = STATE_INIT, { type, payload }) => {
  switch (type) {
    case SEND_EVENT:
      return { ...state, event: {...payload}};
    default:
      return state;
  }
};
