import React from 'react';
import Styles from './AnimacaoBanner.module.css';

const AnimacaoBanner = () => {
  return (
    <div className={Styles.loader}>
      <div className={Styles.box1}></div>
      <div className={Styles.box2}></div>
      <div className={Styles.box3}></div>
    </div>
  );
};

export default AnimacaoBanner;
