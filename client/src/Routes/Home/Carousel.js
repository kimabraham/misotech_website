import React from 'react';
import styled from 'styled-components';
import one_sliding_door from '../../assets/img/productCarousel/1sd_750X750.png';
import three_sliding_door from '../../assets/img/productCarousel/3sd_750X750.png';
import fix_door from '../../assets/img/productCarousel/fix_750X750.png';
import hinge_door from '../../assets/img/productCarousel/hinge_750X750.png';
import swing_door from '../../assets/img/productCarousel/swing_750X750.png';

const Container = styled.div`
  display: flex;
`;

const ImgBox = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const NavBox = styled.div`
  display: flex;
  align-items: center;
  &:last-child {
    margin-left: 50px;
  }
`;

const Nav = styled.i`
  cursor: pointer;
  color: #8f8f8f;
  font-size: 40px;
`;

const TextBox = styled.div`
  display: flex;
`;

const Title = styled.h1`
  margin-bottom: 15px;
  margin-right: 10px;
  margin-left: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 25px;
  font-weight: 800;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-orientation: mixed;
`;

const Carousel = () => {
  return (
    <Container>
      <NavBox>
        <Nav className="fas fa-chevron-circle-left" />
      </NavBox>
      <TextBox>
        <Title>ONE Sliding DOOR </Title>
      </TextBox>
      <ImgBox img={one_sliding_door} />
      <NavBox>
        <Nav className="fas fa-chevron-circle-right" />
      </NavBox>
    </Container>
  );
};

export default Carousel;
