export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const RESET_MESSAGES = 'RESET_MESSAGES';

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message
  };
}

export function addSuccess(message) {
  return {
    type: ADD_SUCCESS,
    message
  };
}

export function addError(message) {
  return {
    type: ADD_ERROR,
    message
  };
}

export function removeMessage(index) {
  return {
    type: REMOVE_MESSAGE,
    index
  };
}

export function resetMessages() {
  return {
    type: RESET_MESSAGES
  };
}
