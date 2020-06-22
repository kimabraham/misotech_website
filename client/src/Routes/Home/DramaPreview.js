import React from 'react';
import styled from 'styled-components';
import goodCasting from '../../assets/img/drama_1.png';

const Container = styled.div`
  padding: 0 7vw;
  display: flex;
  height: 85vh;
`;

const LeftBox = styled.div`
  width: 100%;
  min-width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightBox = styled.div`
  width: 100%;
  min-width: 750px;
  background: url(${(props) => props.backImg});
  background-size: 750px 465px;
  background-position: center center;
  background-repeat: no-repeat;
`;

const FirstBox = styled.div`
  border-left: 1px solid black;
  padding-left: 10px;
  font-size: 14px;
`;

const Title = styled.h1`
  margin: 14px 0 0 0;
  font-size: 40px;
  font-weight: 800;
`;

const Content = styled.p`
  margin-top: 50px;
  color: #6d919b;
  font-size: 18px;
  line-height: 30px;
`;

const SecondBox = styled.div`
  padding-left: 15px;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 800;
`;

const Button = styled.button`
  cursor: pointer;
  color: #7f8c8d;
  border: 2px solid #7f8c8d;
  font-size: 14px;
  background: white;
  padding: 18px 35px;
  text-transform: uppercase;
  margin-top: 100px;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    color: white;
    box-shadow: 0 0 40px 40px #7f8c8d inset;
  }
`;

const DramaPreview = () => {
  return (
    <Container>
      <LeftBox>
        <FirstBox>
          <Text>02</Text>
          <Title>인기드라마 속 미소테크</Title>
        </FirstBox>
        <SecondBox>
          <Content>
            독특한 디자인으로 생활속 공간을 디자인하는 미소테크는
            <br />
            인기드라마에서도 만날 수 있습니다. SBS월화드라마 '굿캐스팅'
            <br />
            외에도 각 방송사 드라마 제작협찬도 활발히 하고 있습니다.
          </Content>
          <Button>view more</Button>
        </SecondBox>
      </LeftBox>
      <RightBox backImg={goodCasting} />
    </Container>
  );
};

export default DramaPreview;
