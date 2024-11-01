import React from 'react';
import Projeto from '../Projeto/Projeto';
import Styles from './MenuProjetos.module.css';

const MenuProjetos = ({projetoImg}) => {
  return (
    <div className={Styles.Container}>
      <Projeto  projetoImg={projetoImg}/>
    </div>
  );
};

export default MenuProjetos;
