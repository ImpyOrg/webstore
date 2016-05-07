import React from 'react';

const links = {
  vk: { url: 'https://vk.com/impyorg', title: 'font__fa-vk' },
  fb: { url: 'https://vk.com/impyorg', title: 'font__fa-fb' },
  inst: { url: 'https://vk.com/impyorg', title: 'font__fa-inst' }
};

export default class Social extends React.Component {
  static displayName = 'Social';

  render() {
    const { entries } = this.props;

    return (
      <div className="social">
        <ul className="social__list">
          {
            entries.map((v, i) => {
              const className = `social__link ${links[v].title}`;
              return <a key={v} href={links[v].url} className={className}></a>;
            })
          }
        </ul>
      </div>
    );
  }
}
