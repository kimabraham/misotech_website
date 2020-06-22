import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import one_sliding_door from '../../assets/img/productCarousel/one_sliding_door.png';
import three_sliding_door from '../../assets/img/productCarousel/three_sliding_door.png';
import fix_door from '../../assets/img/productCarousel/fix_door.png';
import hinge_door from '../../assets/img/productCarousel/hinge_door.png';
import swing_door from '../../assets/img/productCarousel/swing_door.png';

const Container = styled.div`
  padding-left: 100px;
  width: 35vw;
  min-width: 460px;
  .slick-next,
  .slick-prev {
  }
  .slick-next::before,
  .slick-prev::before {
    color: #2f3542;
    font-size: 2vw;
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
  width: 100%;
  height: 100%;
`;

const Preloading = styled.div`
  display: none;
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
      <Preloading>
        <img src={one_sliding_door} alt="" />
        <img src={fix_door} alt="" />
        <img src={three_sliding_door} alt="" />
        <img src={hinge_door} alt="" />
        <img src={swing_door} alt="" />
      </Preloading>
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
