import React from 'react';
import Styles from './Flutuante.module.css';

const Flutuante = () => {
  // let texto = ['A', 'D', 'R', 'I', 'A', 'N', 'O'];
  let texto = ['.', '.', '.', '.', '.', '.', '.', '.', ''];
  // let texto = ['F', 'l', 'u', 't', 'u', 'a', 'n', 't', 'e'];
  return (
    <>
      <div className={Styles.load}>
        {texto.map((atual) => (
          <div>{atual}</div>
        ))}
      </div>
      ;
    </>
  );
};

export default Flutuante;
