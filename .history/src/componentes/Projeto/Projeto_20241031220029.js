import React from 'react';
import Botao from '../Botao/Botao';
import MobPc from '../MobPc/MobPc';
import styled from 'styled-components';
import projeto from './mobile1.png'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  background-size: contain;
  background-position: center;
  border-radius: 1rem;
  width: 20rem;
  height: 15rem;
`;

const Projeto = () => {
  return (
    <>
      <Container>
        <MobPc/>
        <Botao />
      </Container>
    </>
  );
};

export default Projeto;
