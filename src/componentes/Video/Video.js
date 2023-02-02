import React from 'react';
import image from './Desenvolveodr.jpg';
import Styles from './Video.module.css';

const Video = () => {
  return (
    <img
      className={Styles.imagem}
      src={image}
      alt="Minha Figura"
      style={{
        maxWidth: '100%',
        maxHeight: '35rem',
        width: '100%',
        position: 'absolute',
        backgroundSize: 'cover',
        zIndex: '-1',
        clipPath:
          'polygon(50% 0%, 100% 0, 100% 35%, 100% 70%, 80% 90%, 48% 88%, 21% 93%, 0 100%, 0% 35%, 0 1%)',
      }}
    />
  );
};

export default Video;
