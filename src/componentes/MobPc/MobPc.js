import React from 'react';
import Styles from '../MobPc/MobPc.module.css';
import Imagem1 from '../MobPc/pc1.png';
import Imagem2 from '../MobPc/mobile1.png';

const MobPc = () => {
  return (
    <div className={Styles.Container}>
      <img className={Styles.imagemPc} src={Imagem1} alt="sfsfs" />
      <img src={Imagem2} className={Styles.imagemCel} alt="sfadasfs" />
    </div>
  );
};

export default MobPc;
