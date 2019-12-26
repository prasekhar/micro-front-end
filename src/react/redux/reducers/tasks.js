import { ADD_TASK } from '../action-types';

const STATE_INIT = {
  tasks: []
};

export default (state = STATE_INIT, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...payload]};
    default:
      return state;
  }
};
