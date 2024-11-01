import React from 'react';
import Projeto from '../Projeto/Projeto';
import Styles from './MenuProjetos.module.css';

const MenuProjetos = ({projetoImg,url}) => {
  return (
    <div className={Styles.Container}>
      <Projeto  projetoImg={projetoImg} url={url}/>
    </div>
  );
};

export default MenuProjetos;
