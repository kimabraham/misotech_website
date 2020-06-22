import React from 'react';
import styled from 'styled-components';
import daoom from '../../assets/img/partners/daoom.png';
import nsfolding from '../../assets/img/partners/nsfolding.png';
import taesung from '../../assets/img/partners/taesung.png';

const Container = styled.div`
  display: flex;
  background: black;
  height: 10vh;
`;

const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  min-width: 700px;
  font-size: 40px;
  color: white;
  display: flex;
  text-transform: uppercase;
`;

const RightBox = styled.div`
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 800;
  em {
    color: red;
  }
`;

const Text = styled.span``;

const ImgBox = styled.div`
  width: 100%;
  height: 8vh;
  background: white;
  display: flex;
  z-index: 1;
`;

const Img = styled.div`
  width: 100%;
  background: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 300;
`;

const Partners = () => {
  return (
    <Container>
      <LeftBox>
        <Title>
          m<em>i</em>sotech
        </Title>
        &nbsp;
        <Text>partners</Text>
      </LeftBox>
      <RightBox>
        <ImgBox>
          <Img img={nsfolding} />
          <Img img={taesung} />
          <Img img={daoom} />
          <Img img={daoom} />
          <Img img={daoom} />
        </ImgBox>
      </RightBox>
    </Container>
  );
};

export default Partners;
