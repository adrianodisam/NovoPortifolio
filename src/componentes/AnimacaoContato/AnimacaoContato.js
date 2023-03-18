import React from 'react';
import Styles from './AnimacaoContato.module.css';

const AnimacaoContato = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.bar}>
        <div className={Styles.ball}></div>
      </div>
    </div>
  );
};

export default AnimacaoContato;
