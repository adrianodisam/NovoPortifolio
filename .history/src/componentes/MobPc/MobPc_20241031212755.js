import React from 'react';
import Styles from '../MobPc/MobPc.module.css';
import fotoBack from './pessoal.jpg'

const MobPc = ({ image }) => {
  const backgroundStyle = {
    backgroundColor: 'hsla(0, 0%, 67%, 0.1)', // Cor do gradiente
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center', // Centraliza a imagem
    backgroundSize: 'cover', // Cobre todo o div
  };
  console.log(image)

  return <div className={Styles.Container} style={backgroundStyle}></div>;
};

export default MobPc;
