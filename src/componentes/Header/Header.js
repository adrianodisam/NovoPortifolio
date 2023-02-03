import React from 'react';
import Styles from './Header.module.css';
import RedeSociais from '../RedeSociais/RedeSociais';
import Banner from '../Banner/Banner';
const Header = () => {
  return (
    <div className={Styles.Container} id="Home">
      <Banner />
      <RedeSociais posicao="right" />
    </div>
  );
};

export default Header;
