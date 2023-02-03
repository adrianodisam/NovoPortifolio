import React from 'react';
import Styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={Styles.Container}>
      <h1>Seja bem-vindo, eu sou</h1>
      <h2>Adriano Sampaio Desenvolvedor front end.</h2>
      <p>
        Sou um desenvolvedor com foco no front-end ( se aprimorando ao back-end
        em Javascript React/Node ) codificando aplicações elegantes, objetivas e
        otimizadas para o SEO.
      </p>
    </div>
  );
};

export default Banner;
