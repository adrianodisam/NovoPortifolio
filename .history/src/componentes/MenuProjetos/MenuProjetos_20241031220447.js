import React from 'react';
import Projeto from '../Projeto/Projeto';
import Styles from './MenuProjetos.module.css';

const MenuProjetos = () => {
  return (
    <div className={Styles.Container}>
      <Projeto />
    </div>
  );
};

export default MenuProjetos;
