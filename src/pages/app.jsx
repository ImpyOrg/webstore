import React from 'react';
import Helmet from 'react-helmet';

export default class App extends React.Component {
  static displayName = 'App';

  render() {
    return (
      <div className="page">
        <Helmet titleTemplate="%s - Impy"/>
        {this.props.children}
      </div>
    );
  }
}
