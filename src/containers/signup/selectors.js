import { bindActionCreators } from 'redux';

import {
  signupUser
} from './actions';

export const outputSelector = (dispatch) => ({
  actions: { ...bindActionCreators({ signupUser }, dispatch) }
});

const selectors = [
  () => ({}),
  outputSelector
];

export default selectors;
