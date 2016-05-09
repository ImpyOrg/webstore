import React, { PropTypes } from 'react';

const links = {
  vk: { url: 'https://vk.com/impyorg', title: 'font__fa-vk' },
  fb: { url: 'https://vk.com/impyorg', title: 'font__fa-fb' },
  inst: { url: 'https://vk.com/impyorg', title: 'font__fa-inst' }
};

const Social = ({ entries }) => (
  <div className="social">
    <ul className="social__list">
      {
        entries.map((v, i) => {
          const className = `social__link ${links[v].title}`;
          return <a className={className} href={links[v].url} key={i}></a>;
        })
      }
    </ul>
  </div>
);

Social.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Social;
