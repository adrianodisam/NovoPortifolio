import React from 'react';
import Styles from './Botao.module.css';

const Botao = ({url}) => {
  return (
    <div className={Styles.Container}>
      <a href={url} target="blank">
        <span> Ver Mais...</span>
      </a>
    </div>
  );
};

export default Botao;
