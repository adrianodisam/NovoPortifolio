import React from 'react';
import Styles from './Header.module.css';
import Video from '../Video/Video';
import RedeSociais from '../RedeSociais/RedeSociais';

const Header = () => {
  return (
    <div className={Styles.Container} id="Home">
      <Video />
      <RedeSociais posicao="right" />
    </div>
  );
};

export default Header;
