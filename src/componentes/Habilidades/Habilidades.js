import React from 'react';
import CaixaTecnologias from '../CaixaTecnologias/CaixaTecnologias';
import Styles from './Habilidades.module.css';

const Habilidades = () => {
  return (
    <div id="Habilidades" className={Styles.Container}>
      <CaixaTecnologias />
    </div>
  );
};

export default Habilidades;
