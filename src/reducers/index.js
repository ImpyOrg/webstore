import { Map } from 'immutable';
import { combineReducers } from 'redux-immutablejs';

import ui from './ui';
import messages from './messages';
import current_user from './current_user';

const reducer = combineReducers(Map({
  ui,
  messages,
  current_user
}));

export default reducer;
