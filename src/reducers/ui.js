import { Map } from 'immutable';

import * as a from '../actions';

export const initialState = Map({
  modals: Map({
    signup: false,
    login: false
  })
});

export default function reducer(state = initialState, action) {
  let nextState = state;
  switch (action.type) {
    case a.OPEN_SIGNUP:
      nextState = state.setIn(['modals', 'signup'], true);
      break;

    case a.CLOSE_SIGNUP:
      nextState = state.setIn(['modals', 'signup'], false);
      break;

    case a.OPEN_LOGIN:
      nextState = state.setIn(['modals', 'login'], true);
      break;

    case a.CLOSE_LOGIN:
      nextState = state.setIn(['modals', 'login'], false);
      break;

    case a.RESET_UI:
      nextState = initialState;
  }

  return nextState;
}
