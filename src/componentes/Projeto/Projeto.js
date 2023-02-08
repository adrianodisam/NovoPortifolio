import React from 'react';
import Botao from '../Botao/Botao';
import MobPc from '../MobPc/MobPc';
import Styles from './Projeto.module.css';

const Projeto = (props) => {
  return (
    <>
      <div className={Styles.Container}>
        <MobPc />
        <Botao />
      </div>
    </>
  );
};

export default Projeto;
