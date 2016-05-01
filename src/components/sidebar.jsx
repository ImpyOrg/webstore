import React from 'react';

import Logo from './logo';
// import Menu from './menu';
import Social from './social';

export default class Sidebar extends React.Component {
  static displayName = 'Sidebar';

  render() {
    return (
      <div>
        <Logo />
        Sidebar content
        <Social entries={['vk', 'inst', 'fb']} />
      </div>
    );
  }
}
