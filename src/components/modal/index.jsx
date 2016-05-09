import React, { PropTypes } from 'react';

import './modal.less';

class Modal extends React.Component {
  static displayName = 'Modal';

  static propTypes = {
    onHide: PropTypes.func,
    title: PropTypes.node,
    visible: PropTypes.bool
  };

  componentDidMount() {
    if (window) {
      window.addEventListener('keydown', this.keyHandler);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('keydown', this.keyHandler);
    }
  }

  keyHandler = (e) => {
    if (e.keyCode === 27) {
      this.hide();
    }
  }

  hide = (e) => {
    this.props.onHide(e);
  }

  clickHandler = (e) => {
    e.stopPropagation();
  }

  render() {
    const {
      children,
      visible
    } = this.props;

    let cn = 'modal modal__container';
    if (!visible) {
      cn += ' hidden';
    }

    return (
      <div key={1} className={cn} onClick={this.hide}>
        <div className="modal__box" onClick={this.clickHandler}>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
