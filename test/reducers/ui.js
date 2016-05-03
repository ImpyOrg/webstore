import { fromJS } from 'immutable';
import { expect } from 'chai';

import * as a from '../../src/actions';
import { initialState } from '../../src/reducers/ui';

export default function ui(reducer) {
  describe('ui reducer', () => {

    it('exists', () => {
      expect(reducer).to.be.a('function');
    });
  
    it('resets ui after RESET_UI', () => {
      const state = fromJS({});
      const action = a.resetUi();

      const nextState = reducer(state, action).get('ui');

      expect(nextState).to.equal(initialState);
    });

    describe('handles OPEN_SIGNUP:', () => {
      const action = a.openSignup();

      it('opens signup modal if it\'s closed', () => {
        const state = fromJS({modals: {signup: false}});
        const nextState = reducer(state, action).get('ui');

        expect(nextState.getIn(['modals', 'signup'])).to.equal(true);
      });

      it('keeps signup modal opened if it\'s already opened', () => {
        const state = fromJS({modals: {signup: true}});
        const nextState = reducer(state, action).get('ui');

        expect(nextState.getIn(['modals', 'signup'])).to.equal(true);
      });
    });

    describe('handles CLOSE_SIGNUP:', () => {
      const action = a.closeSignup();

      it('closes signup modal if it\'s opened', () => {
        const state = fromJS({modals: {signup: true}});
        const nextState = reducer(state, action).get('ui');

        expect(nextState.getIn(['modals', 'signup'])).to.equal(false);
      });

      it('keeps signup modal closed if it\'s already closed', () => {
        const state = fromJS({modals: {signup: false}});
        const nextState = reducer(state, action).get('ui');

        expect(nextState.getIn(['modals', 'signup'])).to.equal(false);
      });
    });

    describe('handles OPEN_LOGIN:', () => {
      const action = a.openLogin();

      it('opens login modal if it\'s closed', () => {
        const state = fromJS({modals: {login: false}});
        const nextState = reducer(state, action).get('ui');

        expect(nextState.getIn(['modals', 'login'])).to.equal(true);
      });

      it('keeps login modal opened if it\'s already opened', () => {
        const state = fromJS({modals: {login: true}});
        const nextState = reducer(state, action).get('ui');

        expect(nextState.getIn(['modals', 'login'])).to.equal(true);
      });

    });

    describe('handles CLOSE_LOGIN', () => {
      const action = a.closeLogin();

      it('closes login modal if it\'s opened', () => {
        const state = fromJS({modals: {login: true}});
        const nextState = reducer(state, action).get('ui');

        expect(nextState.getIn(['modals', 'login'])).to.equal(false);
      });

      it('keeps login modal closed if it\'s already closed', () => {
        const state = fromJS({modals: {login: false}});
        const nextState = reducer(state, action).get('ui');

        expect(nextState.getIn(['modals', 'login'])).to.equal(false);
      });

    });

  });
}
