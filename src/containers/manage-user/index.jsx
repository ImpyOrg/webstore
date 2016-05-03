import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';
import Button from '../../components/button';

export class ManageUser extends React.Component {
  static displayName = 'ManageUser';
  static propTypes = {
    actions: PropTypes.shape({
      openSignup: PropTypes.func,
      closeSignup: PropTypes.func,
      openLogin: PropTypes.func,
      closeLogin: PropTypes.func
    }).isRequired
  };

  render() {
    const {
      actions
    } = this.props;

    return (
      <div className="manage_user">
        <Button className="link" onClick={actions.openLogin}>
          Log in  
        </Button>
        <Button className="link" onClick={actions.openSignup}>
          Sign up  
        </Button>
      </div>
    );
  }
}

export default connect(...selectors)(ManageUser);
