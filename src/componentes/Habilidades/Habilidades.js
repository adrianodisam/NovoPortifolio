import React from 'react';
import CaixaTecnologias from '../CaixaTecnologias/CaixaTecnologias';
import Skills from '../Skills/Skills';
import Styles from './Habilidades.module.css';

const Habilidades = () => {
  return (
    <div id="Habilidades" className={Styles.Container}>
      <Skills
        tamanho="45%"
        titulo="Foco e skills"
        texto="Me considero muito aplicado na resolução de problemas. Acho que
        compartilhar soluções gera inspiração, quero ter a oportunidade e, no
        momento favorável, ensinar esses passos para iniciantes, conforme eu fui
        orientado e startado no mundo Dev."
      />
      <CaixaTecnologias />
    </div>
  );
};

export default Habilidades;
