import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Carousel from './Carousel';
import Carousel from './Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleSlider from './SimpleSlider';

const Container = styled.div`
  padding: 0 5vw;
  display: flex;
  height: 85vh;
  min-width: 1300px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  color: #6d919b;
  border: 2px solid #6d919b;
  font-size: 14px;
  background: white;
  padding: 18px 35px;
  text-transform: uppercase;
  margin-top: 100px;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    color: white;
    box-shadow: 0 0 40px 40px #6d919b inset;
  }
`;

const ProductPreview = () => {
  return (
    <Container>
      <LeftBox>
        <FirstBox>
          <Text>01</Text>
          <Title>미소를 담은 행복한 공간</Title>
        </FirstBox>
        <SecondBox>
          <Content>
            시원한 개폐공간 활용에 탁월한 효과를 가진 원슬라이딩 도어는
            <br />
            좁은 현관이라도 넓은 시야와 공간이 확보되는 장점과 함께
            <br />
            가볍고 모던한 느낌으로 인테리어 도어로서 큰 인기를 얻고 있습니다.
          </Content>
          <Link to="/company/map">
            <Button>view more</Button>
          </Link>
        </SecondBox>
      </LeftBox>
      <RightBox>
        <SimpleSlider />
        {/* <Carousel /> */}
      </RightBox>
    </Container>
  );
};

export default ProductPreview;
