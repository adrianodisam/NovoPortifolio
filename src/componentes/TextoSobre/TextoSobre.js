import React from 'react';
import Skills from '../Skills/Skills';
import Styles from './TextoSobre.module.css';

const TextoSobre = () => {
  return (
    <div className={Styles.Container}>
      {' '}
      <Skills
        tamanho="55%"
        titulo="SOBRE"
        texto="Desenvolvedor front-end, amante e hater de CSS HTML, em constante evolução e aprendizado ao Fullstack."
      />
      <Skills
        tamanho="35%"
        titulo="MORA EM"
        texto="Embu das Artes São Paulo Brasil"
      />
    </div>
  );
};

export default TextoSobre;
