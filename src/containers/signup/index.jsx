import React from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';
import SignupForm from './form';

export class Signup extends React.Component {
  static displayName = 'Signup';

  submitHandler = (user) => {
    this.props.actions.signupUser(user);
  };

  render() {
    return <SignupForm onSubmit={this.submitHandler} />;
  }
}

export default connect(...selectors)(Signup);
