import React from 'react';

const links = {
  vk: { url: '', title: '' }
};

export default class Social extends React.Component {
  static displayName = 'Social';

  render() {
    const { entries } = this.props;

    return (
      <div>
        <ul>
          {
            entries.map((v, i) => (
              <a href={links[v].url}>{links[v].title}</a>
            ))
          }
        </ul>
      </div>
    );
  }
}
