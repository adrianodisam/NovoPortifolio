import React from 'react';
import CaixaTecnologias from '../CaixaTecnologias/CaixaTecnologias';
import Skills from '../Skills/Skills';
import Styles from './Habilidades.module.css';

const Habilidades = () => {
  return (
    <div id="Habilidades" className={Styles.Container}>
      <Skills />
      <CaixaTecnologias />
    </div>
  );
};

export default Habilidades;
