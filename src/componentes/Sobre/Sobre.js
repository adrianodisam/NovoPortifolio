import React from 'react';

import FotoSobre from '../FotoSobre/FotoSobre';
import TextoCurriculo from '../TextoCurriculo/TextoCurriculo';
import TextoSobre from '../TextoSobre/TextoSobre';

import Styles from './Sobre.module.css';
const Sobre = () => {
  return (
    <div id="Sobre" className={Styles.Container}>
      <TextoSobre />
      <FotoSobre />
      <TextoCurriculo />
    </div>
  );
};

export default Sobre;
