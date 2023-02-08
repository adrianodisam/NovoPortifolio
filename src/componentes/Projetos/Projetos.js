import React from 'react';
import MenuProjetos from '../MenuProjetos/MenuProjetos';
import Styles from './Projetos.module.css';

const Projetos = () => {
  return (
    <div id="Projetos" className={Styles.Container}>
      <MenuProjetos />
    </div>
  );
};

export default Projetos;
