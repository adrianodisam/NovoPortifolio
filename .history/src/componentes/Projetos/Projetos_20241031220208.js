import React from 'react';
import MenuProjetos from '../MenuProjetos/MenuProjetos';
import Styles from './Projetos.module.css';
import projeto01 from './tela_projeto_pdf.png'


const Projetos = () => {
  return (
    <div id="Projetos" className={Styles.Container}>
      <MenuProjetos projetoImg={projeto01} />
      <MenuProjetos  projetoImg={projeto01} />
      <MenuProjetos  projetoImg={projeto01} />
    </div>
  );
};

export default Projetos;
