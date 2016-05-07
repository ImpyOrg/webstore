import React from 'react';
import { Link } from 'react-router';

export default class Auth extends React.Component {
  static displayName = 'Auth';

  signup = () => {

  };

  login = () => {

  };

  render() {
    return (
      <div className="manage_user__auth">
        <Link to="" onClick={this.login} />
        <Link to="" onClick={this.signup} />
      </div>
    );
  }
}
