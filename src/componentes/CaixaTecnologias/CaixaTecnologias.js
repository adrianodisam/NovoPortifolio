import React from 'react';
import SvgBootstrap from '../SvgBootstrap/SvgBootstrap';
import SvgCss from '../SvgCss/SvgCss';
import SvgGit from '../SvgGit/SvgGit';
import SvgHtml from '../SvgHtml/SvgHtml';
import SvgJavascript from '../SvgJavascript/SvgJavascript';
import SvgNode from '../SvgNode/SvgNode';
import SvgReact from '../SvgReact/SvgReact';
import SvgSql from '../SvgSql/SvgSql';
import Tecnologia from '../Tecnologia/Tecnologia';
import Styles from './CaixaTecnologias.module.css';

const CaixaTecnologias = () => {
  return (
    <div className={Styles.Container}>
      <Tecnologia svg={<SvgCss />} texto="Css" />
      <Tecnologia svg={<SvgHtml />} texto="Html" />
      <Tecnologia svg={<SvgBootstrap />} texto="Bootstrap" />
      <Tecnologia svg={<SvgGit />} texto="GitHub" />
      <Tecnologia svg={<SvgJavascript />} texto="Javascript" />
      <Tecnologia svg={<SvgNode />} texto="Node" />
      <Tecnologia svg={<SvgReact />} texto="React" />
      <Tecnologia svg={<SvgSql />} texto="Sql Server" />
    </div>
  );
};

export default CaixaTecnologias;
