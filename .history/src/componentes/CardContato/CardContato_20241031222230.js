import React from 'react';
import Styles from './CardContato.module.css';
import RedeSociais from '../RedeSociais/RedeSociais';

const CardContato = () => {
  return (
    <div id="Contato" className={Styles.Container}>
      <div>
        <small> Envie um e-mail para</small>
        <h1>Adrianodisam@gmail.com</h1>
      </div>
      <RedeSociais posicao="right" />
    </div>
  );
};

export default CardContato;
