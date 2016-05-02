// ui actions
const RESET_UI = 'RESET_UI';

const OPEN_SIGNUP = 'OPEN_SIGNUP';
const CLOSE_SIGNUP = 'CLOSE_SIGNUP';
const OPEN_LOGIN = 'OPEN_LOGIN';
const CLOSE_LOGIN = 'CLOSE_LOGIN';

export function resetUi() {
  return {
    type: RESET_UI
  };
}

export function openSignup() {
  return {
    type: OPEN_SIGNUP
  };
}

export function closeSignup() {
  return {
    type: CLOSE_SIGNUP
  };
}

export function openLogin() {
  return {
    type: OPEN_LOGIN
  };
}

export function closeLogin() {
  return {
    type: CLOSE_LOGIN
  };
}
