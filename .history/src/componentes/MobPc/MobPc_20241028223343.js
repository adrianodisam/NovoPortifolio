import React from 'react';
import Styles from '../MobPc/MobPc.module.css';

const MobPc = ({ image }) => {
  const backgroundStyle = {
    backgroundColor: 'hsla(0, 0%, 67%, 0.1)', // Cor do gradiente
    backgroundImage: `linear-gradient(hsla(0, 0%, 67%, 0.1), hsla(0, 0%, 6%, 0.2)), url(../MobPc/pessoal.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center', // Centraliza a imagem
    backgroundSize: 'cover', // Cobre todo o div
  };
  console.log(image)

  return <div className={Styles.Container} style={backgroundStyle}></div>;
};

export default MobPc;
