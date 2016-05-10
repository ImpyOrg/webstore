import { bindActionCreators } from 'redux';

import { createSelector } from '../../selectors';
import {
  openSignup, closeSignup,
  openLogin, closeLogin
} from '../../actions/ui';

export const inputSelector = createSelector(
  state => state.get('user'),
  state => state.getIn(['ui', 'modals']).toJS(),
  (user, modals) => ({ user, modals })
);

export const outputSelector = (dispatch) => ({
  actions: { ...bindActionCreators({ openSignup, closeSignup, openLogin, closeLogin }, dispatch) }
});

const selectors = [
  inputSelector,
  outputSelector
];

export default selectors;
