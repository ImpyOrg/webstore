import { List } from 'immutable';

import * as a from '../actions/messages';
import { MESSAGE_TYPE } from '../consts/messages';

export const initialState = List([]);

export default function reducer(state = initialState, action) {
  let nextState = state;
  switch (action.type) {
    case a.ADD_MESSAGE: {
      const index = state.findIndex(m => m.message === action.message);
      if (index >= 0) {
        nextState = state.remove(index);
      }

      nextState = nextState.push({
        type: action.message.type,
        message: action.message.message
      });
      break;
    }

    case a.ADD_SUCCESS:
      nextState = state.push({
        type: MESSAGE_TYPE.SUCCESS,
        message: action.message
      });
      break;

    case a.ADD_ERROR:
      nextState = state.push({
        type: MESSAGE_TYPE.ERROR,
        message: action.message
      });
      break;

    case a.REMOVE_MESSAGE:
      nextState = state.remove(action.index);
      break;

    case a.RESET_MESSAGES:
      nextState = initialState;
  }

  return nextState;
}
