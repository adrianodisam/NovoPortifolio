import React from 'react';
import Styles from './Banner.module.css';
import Flutuante from '../Flutuante/Flutuante';

const Banner = () => {
  return (
    <div className={Styles.Container}>
      <h1>Seja bem-vindo, eu sou</h1>
      <h2>Adriano Sampaio Desenvolvedor front end.</h2>
      <p>
        Sou um desenvolvedor com foco no front-end ,se aprimorando ao back-end
        em Javascript React/Node. <br />
        Codificando aplicações elegantes, objetivas e otimizadas para o SEO{' '}
        <br /> (otimização de mecanismos de busca) .
      </p>{' '}
      <Flutuante />
    </div>
  );
};

export default Banner;
