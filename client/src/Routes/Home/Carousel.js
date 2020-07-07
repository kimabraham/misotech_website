import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import one_sliding_door from '../../assets/img/productCarousel/1sd_750X750.png';
import three_sliding_door from '../../assets/img/productCarousel/3sd_750X750.png';
import fix_door from '../../assets/img/productCarousel/fix_750X750.png';
import hinge_door from '../../assets/img/productCarousel/hinge_750X750.png';
import swing_door from '../../assets/img/productCarousel/swing_750X750.png';

const Container = styled.div`
  width: 100%;
  display: flex;
  min-width: 700px;
`;

const ImgBox = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-transition: background 1s linear;
  -moz-transition: background 1s linear;
  -o-transition: background 1s linear;
  transition: background 1s linear;
`;

const NavBox = styled.div`
  display: flex;
  align-items: center;
  &:last-child {
    margin-left: 30px;
  }
`;

const Nav = styled.i`
  cursor: pointer;
  color: #8f8f8f;
  font-size: 40px;
`;

const TextBox = styled.div`
  display: flex;
  height: 500px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 800;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-orientation: mixed;
`;

const Preloading = styled.div`
  display: none;
`;

const Carousel = () => {
  const imgs = [
    one_sliding_door,
    fix_door,
    three_sliding_door,
    hinge_door,
    swing_door,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(one_sliding_door);

  const handlePrev = () => {
    if (currentIndex < 1) {
      setCurrentIndex(4);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex > imgs.length - 2) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    setCurrentImg(imgs[currentIndex]);
  }, [currentIndex]);

  return (
    <Container>
      <Preloading>
        <img src={one_sliding_door} alt="" />
        <img src={fix_door} alt="" />
        <img src={three_sliding_door} alt="" />
        <img src={hinge_door} alt="" />
        <img src={swing_door} alt="" />
      </Preloading>
      <NavBox>
        <Nav className="fas fa-chevron-circle-left" onClick={handlePrev} />
      </NavBox>
      <TextBox>
        <Title>ONE Sliding DOOR </Title>
      </TextBox>
      <ImgBox img={currentImg} />
      <NavBox>
        <Nav className="fas fa-chevron-circle-right" onClick={handleNext} />
      </NavBox>
    </Container>
  );
};

export default Carousel;
