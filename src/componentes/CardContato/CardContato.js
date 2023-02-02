import React from 'react';
import Styles from './CardContato.module.css';
import imagem from '../WhatsAppContato/whatsapp.png';
import imagemTelefone from '../Contato/telefone.png';
import RedeSociais from '../RedeSociais/RedeSociais';

const CardContato = () => {
  const tel = ['(11)99953-7132'];
  const whats = ['(11)99953-7132'];

  return (
    <div className={Styles.Container}>
      <div>
        <h1>
          <br />
          <small>Rua jussara 64 , parque pirajussara Embu das artes - Sp</small>
        </h1>
      </div>

      <ul>
        {tel.map((telefone) => (
          <li>
            <img src={imagemTelefone} alt="Telefone" />
            {telefone}
          </li>
        ))}
        {whats.map((whatsapp) => (
          <li>
            <a
              href="https://wa.me/5511999537132?text=Ol%C3%A1%21+Estou+no+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es"
              target="blank"
            >
              <img src={imagem} alt="Logo whatsapp" />
              {whatsapp}
            </a>
          </li>
        ))}
      </ul>
      <RedeSociais posicao="right" />
    </div>
  );
};

export default CardContato;
