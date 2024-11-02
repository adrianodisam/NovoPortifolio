import React from 'react';
import MenuProjetos from '../MenuProjetos/MenuProjetos';
import Styles from './Projetos.module.css';
import projeto01 from './tela_projeto_pdf.png'
import projeto02 from './tamires.png'
import projeto03 from './monica.png'



const Projetos = () => {
  const url01= "https://tamires-dqq3g6urt-umdevadriano.vercel.app/"
  const url02 = "https://front-end-pdf-extrator.vercel.app/"
  const url03 = "https://front-end-pdf-extrator.vercel.app/"

  return (
    <div id="Projetos" className={Styles.Container}>
      <MenuProjetos projetoImg={projeto01} url={url02} />
      <MenuProjetos projetoImg={projeto02} url={url01} />
      <MenuProjetos projetoImg={projeto03} url={url03} />
    </div>
  );
};

export default Projetos;
