import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import one_sliding_door from '../../assets/img/productCarousel/one_sliding_door.png';
import three_sliding_door from '../../assets/img/productCarousel/three_sliding_door.png';
import fix_door from '../../assets/img/productCarousel/fix_door.png';
import hinge_door from '../../assets/img/productCarousel/hinge_door.png';
import swing_door from '../../assets/img/productCarousel/swing_door.png';

const Container = styled.div`
  width: 35vw;
  .slick-next,
  .slick-prev {
  }
  .slick-next::before,
  .slick-prev::before {
    color: #2f3542;
    font-size: 3vw;
    opacity: 1;
  }
  .slick-arrow:hover {
    opacity: 0.5;
  }
  .slick-arrow:focus {
  }
  .slick-next {
    right: -5vw;
  }
  .slick-prev {
    left: -5vw;
    z-index: 1;
  }
`;

const Box = styled.div``;

const Img = styled.img`
  width: 35vw;
  height: 35vw;
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

const SimpleSlider = () => {
  var settings = {
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Slider {...settings}>
        <Box>
          <Img src={one_sliding_door} alt="one_sliding_door" />
        </Box>
        <Box>
          <Img src={three_sliding_door} alt="three_sliding_door" />
        </Box>
        <Box>
          <Img src={fix_door} alt="fix_door" />
        </Box>
        <Box>
          <Img src={hinge_door} alt="hinge_door" />
        </Box>
        <Box>
          <Img src={swing_door} alt="swing_door" />
        </Box>
      </Slider>
    </Container>
  );
};

export default SimpleSlider;
