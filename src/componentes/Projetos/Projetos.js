import React from 'react';
import MenuProjetos from '../MenuProjetos/MenuProjetos';
import Styles from './Projetos.module.css';
import Flutuante from '../Flutuante/Flutuante';

const Projetos = () => {
  return (
    <div id="Projetos" className={Styles.Container}>
      <Flutuante />
      <MenuProjetos />
    </div>
  );
};

export default Projetos;
