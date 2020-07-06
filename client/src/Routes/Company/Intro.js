import React from 'react';
import styled from 'styled-components';
import IntroHeader from '../../assets/img/company/IntroHeader.png';
import IntroBody from '../../assets/img/company/IntroBody.png';

const Container = styled.div``;

const Header = styled.div`
  background: url(${IntroHeader});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 20.42vw;
`;

const Body = styled.div`
  background: url(${IntroBody});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 162.8vw;
`;

const Intro = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
};

export default Intro;
