import React from 'react';
import Helmet from 'react-helmet';

import Sidebar from '../components/sidebar';
import Header from '../components/header';

export default class Home extends React.Component {
  static displayName = 'Home';
  
  render() {
    return (
      <div>
        <Helmet title="Homepage"/>
        <Sidebar />
        <Header />
        This is Homepage!
      </div>
    );
  }
}
