import React from 'react';
import Styles from '../MobPc/MobPc.module.css';
import fotoBack from './pessoal.jpg'

const MobPc = ({ image }) => {
  const backgroundStyle = {
    backgroundColor: 'hsla(0, 0%, 67%, 0.1)', // Cor do gradiente
    backgroundImage: `linear-gradient(hsla(0, 0%, 67%, 0.1), hsla(0, 0%, 6%, 0.2)), url(${fotoBack})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center', // Centraliza a imagem
    backgroundSize: 'cover', // Cobre todo o div
  };

  return <div className={Styles.Container} >
    <img src={fotoBack} alt='imagem ' style={backgroundStyle}/>
  </div>;
};

export default MobPc;