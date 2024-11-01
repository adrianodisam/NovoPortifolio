import React from 'react';
import MenuProjetos from '../MenuProjetos/MenuProjetos';
import Styles from './Projetos.module.css';
import projeto02 from './pc1.png'
import projeto01 from './tela_projeto_pdf.png'



const Projetos = () => {
  const url01 = "https://www.adrianosampaio.com.br/"
  const url02 = "https://front-end-pdf-extrator.vercel.app/"
  return (
    <div id="Projetos" className={Styles.Container}>
      <MenuProjetos projetoImg={projeto01} url={url02} />
      <MenuProjetos projetoImg={projeto02} url={url01} />
    </div>
  );
};

export default Projetos;
