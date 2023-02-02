import React from 'react';
import TextoRoda from '../TextoRoda/TextoRoda ';
import Styles from './Footer.module.css';

const Footer = () => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  return (
    <div className={Styles.Container}>
      <TextoRoda
        texto={` Copyright © ${anoAtual} - Site de portfolio | Desenvolvido por: Sampaio S.S
        `}
      />
    </div>
  );
};

export default Footer;
