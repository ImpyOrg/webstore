import { Map } from 'immutable';

import * as a from '../actions';

export const initialState = Map({
  modals: Map({
    signup: false,
    login: false
  })
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case a.OPEN_SIGNUP:
      state = state.setIn(['modals', 'signup'], true);
      break;
    
    case a.CLOSE_SIGNUP:
      state = state.setIn(['modals', 'signup'], false);
      break;
    
    case a.OPEN_LOGIN:
      state = state.setIn(['modals', 'login'], true);
      break;
    
    case a.CLOSE_LOGIN:
      state = state.setIn(['modals', 'login'], false);
      break;

    case a.RESET_UI:
      state = initialState;
  }

  return state;
}