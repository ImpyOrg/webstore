import i from 'immutable';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutablejs';

export const reducer = combineReducers(i.Map({

}));

const initialState = i.Map({
  
});

let store;
export function initState(state = initialState) {
  store = createStore(reducer, i.fromJS(state));
  return store;
}
