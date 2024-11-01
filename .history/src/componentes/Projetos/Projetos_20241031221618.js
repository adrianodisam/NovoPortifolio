import React from 'react';
import MenuProjetos from '../MenuProjetos/MenuProjetos';
import Styles from './Projetos.module.css';
import projeto02 from './Captura de tela 2024-10-31 221533.png'
import projeto01 from './tela_projeto_pdf.png'




const Projetos = () => {
  const url01 = "https://www.adrianosampaio.com.br/"
  const url02 = "https://front-end-pdf-extrator.vercel.app/"
  const url03 = "https://tamires-dqq3g6urt-umdevadriano.vercel.app/"
  return (
    <div id="Projetos" className={Styles.Container}>
      <MenuProjetos projetoImg={projeto01} url={url02} />
      <MenuProjetos projetoImg={projeto02} url={url01} />
      <MenuProjetos projetoImg={projeto02} url={url03} />
    </div>
  );
};

export default Projetos;
