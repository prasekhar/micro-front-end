import { ADD_CONTACT } from '../action-types';

const STATE_INIT = {
  contacts: []
};

export default (state = STATE_INIT, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };
    default:
      return state;
  }
};
