import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/header';

export default class App extends React.Component {
  static displayName = 'App';

  render() {
    return (
      <div className="page">
        <Helmet titleTemplate="%s - Impy"/>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
