import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => `url(${props.image})`};
  background-color: hsla(0, 0%, 67%, 0.1);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  /* Responsividade */
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const Content = styled.div`
  width: 90%;
  max-width: 800px;
  padding: 20px;
  color: #fff;
  text-align: center;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const MobPc = ({ image, children }) => {
  return (
    <Container image={image}>
      <Content>{children}</Content>
    </Container>
  );
};

export default MobPc;