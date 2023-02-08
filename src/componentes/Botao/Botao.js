import React from 'react';
import Styles from './Botao.module.css';

const Botao = () => {
  return (
    <div className={Styles.Container}>
      <a href="https://www.adrianosampaio.com.br/" target="blank">
        <span> Ver Mais...</span>
      </a>
    </div>
  );
};

export default Botao;
