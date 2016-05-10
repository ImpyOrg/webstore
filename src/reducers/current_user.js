import { Map, fromJS } from 'immutable';

import * as a from '../actions/current_user';

export const initialState = Map({});

export default function reducer(state = initialState, action) {
  let nextState = state;
  switch (action.type) {
    case a.SET_CURRENT_USER:
      nextState = fromJS(action.current_user);
      break;
  }

  return nextState;
}
