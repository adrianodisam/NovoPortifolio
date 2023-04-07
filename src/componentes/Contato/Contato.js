import React from 'react';
import CardContato from '../CardContato/CardContato';
// import Formulario from '../Formulario/Formulario';
import Styles from './Contato.module.css';
import Flutuante from '../Flutuante/Flutuante';

const Contato = (props) => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.ContainerContato} id="Contato">
        {/* <Formulario /> */}
        <Flutuante />
        <CardContato />
      </div>
    </div>
  );
};

export default Contato;
