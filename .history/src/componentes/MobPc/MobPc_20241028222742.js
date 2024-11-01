import React from 'react';
import Styles from '../MobPc/MobPc.module.css';

const MobPc = ({ image }) => {
  const backgroundStyle = {
    background: `linear-gradient(hsla(0, 0%, 67%, 0.1), hsla(0, 0%, 6%, 0.2)), url(${image}) no-repeat center center`,
    backgroundSize: 'cover', // Para cobrir todo o div
  };
  console.log(image)

  return <div className={Styles.Container} style={backgroundStyle}></div>;
};

export default MobPc;
