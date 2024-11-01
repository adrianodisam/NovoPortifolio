import React from 'react';
import Botao from '../Botao/Botao';
import MobPc from '../MobPc/MobPc';
import Styles from './Projeto.module.css';
import imagemFundo from '../MobPc/pessoal.jpg'

const Projeto = (props) => {
  return (
    <>
      <div className={Styles.Container}>
      <MobPc image={imagemFundo} />
        <Botao />
      </div>
    </>
  );
};

export default Projeto;
