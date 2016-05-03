import React from 'react';

import ManageUser from '../containers/manage-user';

export default class Header extends React.Component {
  static displayName = 'Header';

  render() {
    const {
      current_user
    } = this.props;

    return (
      <div className="header">
        <ManageUser user={current_user} />
      </div>
    );
  }
}
