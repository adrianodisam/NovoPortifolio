import React from 'react';
import Styles from './Header.module.css';
import RedeSociais from '../RedeSociais/RedeSociais';
import Banner from '../Banner/Banner';
import AnimacaoBanner from '../AnimacaoBanner/AnimacaoBanner';
const Header = () => {
  return (
    <div className={Styles.Container} id="Home">
      <Banner />
      <AnimacaoBanner />
      <RedeSociais posicao="right" />
    </div>
  );
};

export default Header;
