import React from 'react';

import FotoSobre from '../FotoSobre/FotoSobre';
import TextoCurriculo from '../TextoCurriculo/TextoCurriculo';
import TextoSobre from '../TextoSobre/TextoSobre';

import Styles from './Sobre.module.css';
import Flutuante from '../Flutuante/Flutuante';
const Sobre = () => {
  return (
    <div id="Sobre" className={Styles.Container}>
      <TextoSobre />
      <FotoSobre />
      <TextoCurriculo />
      <Flutuante />
    </div>
  );
};

export default Sobre;
