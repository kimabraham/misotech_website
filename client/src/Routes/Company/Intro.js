import React from 'react';
import styled from 'styled-components';
import IntroHeader from '../../assets/img/company/IntroHeader.png';
import IntroBody from '../../assets/img/company/IntroBody.png';

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  background: url(${IntroHeader});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: calc((415 / 1920) * 100vw);
`;

const Body = styled.img`
  width: 60vw;
  margin-top: 3vw;
`;

const Intro = () => {
  return (
    <Container>
      <Header />
      <Body src={IntroBody} alt="introCompany" />
    </Container>
  );
};

export default Intro;
