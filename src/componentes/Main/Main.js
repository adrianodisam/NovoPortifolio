import React from 'react';

import Styles from './Main.module.css';

import Contato from '../Contato/Contato';

const Main = () => {
  return (
    <div className={Styles.Container}>
      <Contato />
    </div>
  );
};

export default Main;
