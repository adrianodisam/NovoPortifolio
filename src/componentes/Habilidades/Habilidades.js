import React from 'react';
import AnimacaoContato from '../AnimacaoContato/AnimacaoContato';
import CaixaTecnologias from '../CaixaTecnologias/CaixaTecnologias';
import Skills from '../Skills/Skills';
import Styles from './Habilidades.module.css';

const Habilidades = () => {
  return (
    <div id="Habilidades" className={Styles.Container}>
      <div className={Styles.ContainerAnima}>
        <AnimacaoContato />
        <Skills
          tamanho="45%"
          titulo="Foco e skills"
          texto=" Muito aplicado na resolução de problemas.
        Compartilhar soluções gera inspiração, quero ter a oportunidade de transformar Layouts em visiblidade mudar negócios transformar empresas"
        />
      </div>

      <CaixaTecnologias />
    </div>
  );
};

export default Habilidades;
