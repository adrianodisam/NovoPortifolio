import React from 'react';
import Styles from './Download.module.css';
import resume from '../Download/Adriano.pdf';

const Download = () => {
  return (
    <div className={Styles.Container}>
      <button className={Styles.btn}>
        <a href={resume} download="Adriano.pdf">
          {' '}
          <span className={Styles.btn_text_one}>CV</span>
          <span className={Styles.btn_text_two}>Download</span>
        </a>
      </button>
    </div>
  );
};

export default Download;
