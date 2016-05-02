import React from 'react';

export default class ManageUser extends React.Component {
  static displayName = 'ManageUser';

  render() {
    const {
      current_user
    } = this.props;

    if (current_user) {

    }

    return (
      <div className="manage_user">
      </div>
    );
  }
}
