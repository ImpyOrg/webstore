import React, { PropTypes } from 'react';
import { FeedbackFormSubmit } from 'react-inform';

export default class SubmitButton extends React.Component {
  static displayName = 'SubmitButton';

  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    onInvalid: PropTypes.func,
    onResponse: PropTypes.func
  };

  static defaultProps = {
    className: '',
    onClick: () => {},
    onInvalid: () => {},
    onResponse: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: true
    };
  }

  load = (isLoaded = false) => {
    this.setState({ isLoaded });
  };

  render() {
    let { className } = this.props;
    if (!this.state.isLoaded) {
      className += ' loading';
    }

    return (
      <div onClick={this.props.onClick}>
        <FeedbackFormSubmit
          {...this.props}
          className={className.trim()}
          onClick={this.props.onResponse}
          onInvalid={this.props.onInvalid}
        />
      </div>
    );
  }
}
