import React from 'react';
import Botao from '../Botao/Botao';
import MobPc from '../MobPc/MobPc';
import Styles from './Projeto.module.css';
import projeto01 from './pc1.png'

const Projeto = (props) => {
  return (
    <>
      <div className={Styles.Container}>
      <MobPc image={projeto01} />
        <Botao />
      </div>
    </>
  );
};

export default Projeto;
