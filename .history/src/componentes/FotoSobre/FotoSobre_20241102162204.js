import React from 'react';
import Styles from './FotoSobre.module.css';
import imagemFundo from './perfil.jpeg';

const FotoSobre = () => {
  return (
    <div className={Styles.Container}>
      <img src={imagemFundo} alt="perfil" />
    </div>
  );
};

export default FotoSobre;
