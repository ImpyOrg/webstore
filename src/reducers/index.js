import { Map } from 'immutable';
import { combineReducers } from 'redux-immutablejs';

import ui from './ui';

const reducer = combineReducers(Map({
  ui
}));

export default reducer;
