import React from 'react';
import styled from 'styled-components';
import MapComponent from './MapComponent';

const Container = styled.div`
  width: 100%;
  padding: 2vw 10vw;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: red;
  margin: 0 0 40px 5vw;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-left: 5vw;
`;

const Wrap = styled.div`
  width: 100%;
  margin: 2vw 0;
  display: flex;
  justify-content: center;
  &:last-child {
    display: block;
    margin: 0 0 3vw 0;
    padding: 0 5vw;
  }
`;

const Box = styled.div`
  display: flex;
  height: 40px;
  border-top: 1px solid black;
  &:last-child {
    border-bottom: 1px solid black;
  }
  > div:first-child {
    width: 20%;
    background: #bdc3c7;
  }
  > div:last-child {
    justify-content: flex-start;
    align-items: center;
  }
`;

const SubBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.h1`
  font-size: 18px;
`;

const Content = styled.p`
  padding-left: 30px;
  font-size: 18px;
`;

const Map = () => {
  return (
    <Container>
      <Title>오시는길</Title>
      <Text>저희 미소테크로 오시는 길을 안내합니다.</Text>
      <Text>참고하셔서 편안하게 오시기 바랍니다.</Text>
      <Wrap>
        <MapComponent />
      </Wrap>
      <Wrap>
        <Box>
          <SubBox>
            <SubTitle>주 소</SubTitle>
          </SubBox>
          <SubBox>
            <Content>
              경기도 남양주시 화도읍 수레로 961번길 25-30(지번 : 남양주시 화도읍
              차산리 790-1)
            </Content>
          </SubBox>
        </Box>
        <Box>
          <SubBox>
            <SubTitle>연락처</SubTitle>
          </SubBox>
          <SubBox>
            <Content>031-594-1042</Content>
          </SubBox>
        </Box>
      </Wrap>
    </Container>
  );
};

export default Map;
