import React from 'react';

import Skills from '../Skills/Skills';
import Styles from './TextoSobre.module.css';

const TextoSobre = () => {
  return (
    <div className={Styles.Container}>
      <Skills
        tamanho="55%"
        titulo="SOBRE"
        texto="Desenvolvedor front-end, amante e de CSS, HTML e REACT, em constante evolução e aprendizado ao Fullstack.
        Formado em Ciência da Computação na Universidade Paulista - UNIP no ano de 2022"
      />
    </div>
  );
};

export default TextoSobre;
