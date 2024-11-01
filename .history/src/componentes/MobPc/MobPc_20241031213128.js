import React from 'react';
import Styles from '../MobPc/MobPc.module.css';

const MobPc = ({ image }) => {
  const backgroundStyle = {
    backgroundImage: `url(${image})`, // Imagem de fundo customizável via prop
    backgroundColor: 'hsla(0, 0%, 67%, 0.1)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div className={Styles.Container} style={backgroundStyle}>
      <div className={Styles.Content}>
        {/* Aqui você pode adicionar conteúdo do projeto, como título, descrição, etc. */}
      </div>
    </div>
  );
};

export default MobPc;
