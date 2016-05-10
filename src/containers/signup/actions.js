import a from '../../actions';

async function registerUser({ firstname, lastname, email }) {
  return {
    success: true,
    user: {
      firstname,
      lastname,
      email
    }
  };
}

export function signupUser(user) {
  return async (dispatch) => {
    try {
      const result = await registerUser(user);

      if (result.success) {
        dispatch(signupSuccess());
        dispatch(a.setCurrentUser(result.user));
      }
    } catch (e) {
      dispatch(a.addError(e.message));
    }
  };
}

export function signupSuccess() {
  return dispatch => {
    dispatch(a.addSuccess('Register success'));
  };
}
