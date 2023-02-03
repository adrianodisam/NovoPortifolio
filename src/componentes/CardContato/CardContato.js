import React from 'react';
import Styles from './CardContato.module.css';
import imagem from '../WhatsAppContato/whatsapp.png';
import imagemTelefone from '../Contato/telefone.png';
import RedeSociais from '../RedeSociais/RedeSociais';

const CardContato = () => {
  const tel = ['(11)99953-7132'];
  const whats = ['(11)99953-7132'];

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
