import React from 'react';
import Styles from './Download.module.css';
import resume from '../Download/Adriano.pdf';

const Download = () => {
  return (
    <div className={Styles.Container}>
      <a href={resume} download="Adriano.pdf">
        Download
      </a>
    </div>
  );
};

export default Download;
