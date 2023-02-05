import React from 'react';
import Download from '../Download/Download';
import Skills from '../Skills/Skills';
import styles from './TextoCurriculo.module.css';

const TextoCurriculo = () => {
  return (
    <div className={styles.Container}>
      <Skills tamanho="45%" titulo="EXPERIÊNCIA" texto="1 - 2 anos | Junior" />
      <Skills tamanho="45%" titulo="DOWNLOAD" />
      <Download />
    </div>
  );
};

export default TextoCurriculo;
