import React from 'react';
import CardContato from '../CardContato/CardContato';
// import Formulario from '../Formulario/Formulario';
import Styles from './Contato.module.css';

const Contato = (props) => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.ContainerContato} id="Contato">
        {/* <Formulario /> */}

        <CardContato />
      </div>
    </div>
  );
};

export default Contato;
