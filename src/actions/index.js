import * as _messages from './messages';
import * as _ui from './ui';
import * as _user from './user';
import * as _current_user from './current_user';

export const messages = _messages;
export const ui = _ui;
export const user = _user;
export const current_user = _current_user;

export default {
  ...messages,
  ...ui,
  ...user,
  ...current_user
};
