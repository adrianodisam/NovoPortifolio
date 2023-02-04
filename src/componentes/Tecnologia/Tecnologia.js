import React from 'react';
import Styles from './Tecnologia.module.css';

const Tecnologia = (props) => {
  return (
    <div className={Styles.Container}>
      <p>{props.texto}</p>
      {props.svg}
    </div>
  );
};

export default Tecnologia;
