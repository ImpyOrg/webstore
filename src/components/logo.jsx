import React from 'react';

const path = '/assets/pic/logo_main.png';

const Logo = () => {
  return (
    <figure>
      <img src={path} alt=""/>
      <figcaption className="hidden"><h1>Impy Webstore</h1></figcaption>
    </figure>
  );
}

export default Logo;
