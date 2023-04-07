import React from 'react';
import Styles from './Skills.module.css';

const Skills = (props) => {
  return (
    <div className={Styles.Container} style={{ width: `${props.tamanho}` }}>
      <div className={Styles.load}>
        <h3>{props.titulo}</h3>
      </div>
      <p>{props.texto}</p>
    </div>
  );
};

export default Skills;
