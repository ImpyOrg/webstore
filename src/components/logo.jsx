import React from 'react';

const path = '/pic/logo_main.png';

const Logo = () => (
  <figure>
    <img alt="" src={path}/>
    <figcaption className="hidden"><h1>Impy Webstore</h1></figcaption>
  </figure>
);

export default Logo;
