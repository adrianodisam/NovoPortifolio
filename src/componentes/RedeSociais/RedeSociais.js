import React from 'react';
import SvgGitHub from '../SvgGitHub/SvgGitHub';
import SvgInstagram from '../SvgInstagram/SvgInstagram';
import SvgLinkedin from '../SvgLinkedin/SvgLinkedin';
import Styles from './RedeSociais.module.css';

const RedeSociais = (props) => {
  return (
    <div
      className={Styles.Container}
      style={{ justifyContent: `${props.posicao}` }}
    >
      <a href="https://www.instagram.com/adriano_orsamp/" target="blank">
        <SvgInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/adriano-silva-sampaio/"
        target="blank"
      >
        <SvgLinkedin link="https://www.linkedin.com/in/camila-santos-5853b2b7" />{' '}
      </a>
      <a href="https://github.com/adrianodisam" target="blank">
        <SvgGitHub />
      </a>
    </div>
  );
};

export default RedeSociais;
