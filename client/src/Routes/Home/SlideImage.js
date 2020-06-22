import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mainImage1 from '../../assets/img/main/main_img_1.png';
import mainImage2 from '../../assets/img/main/main_img_2.png';
import mainImage3 from '../../assets/img/main/main_img_3.png';
import mainImage4 from '../../assets/img/main/main_img_4.png';

const Container = styled.div`
  width: 100vw;
  height: 43vw;
  background-image: url(${(props) => props.img && props.img});
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  -webkit-transition: background 1s;
  -moz-transition: background 1s;
  -o-transition: background 1s;
  transition: background 1s;
`;

const Preload = styled.div`
  display: none;
`;

const TitleBox = styled.div``;

const Title = styled.h1``;

const Text = styled.span``;

const NavbarContainer = styled.div`
  > span {
    text-transform: uppercase;
  }
  margin-bottom: 20px;
`;

const Nav = styled.span`
  font-size: 25px;
  font-weight: 800;
  cursor: pointer;
  margin-left: 12px;
  color: ${(props) => (props.colorValue ? 'red' : 'black')};
  transition: color 0.3s;
`;

const NavText = styled.span`
  margin-left: 15px;
  color: #2f3542;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 15px;
`;

const SlideImage = () => {
  const imgArr = [
    { id: 0, text: 'm', src: mainImage1 },
    { id: 1, text: 'i', src: mainImage2 },
    { id: 2, text: 's', src: mainImage3 },
    { id: 3, text: 'o', src: mainImage4 },
  ];

  const [currentImg, setCurrentImg] = useState(mainImage1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBackImg = (i) => {
    setCurrentImg(imgArr[i].src);
    setCurrentIndex(i);
  };

  useEffect(() => {
    const next = (currentIndex + 1) % imgArr.length;
    const id = setTimeout(() => {
      handleBackImg(next);
    }, 5000);
    return () => clearTimeout(id);
  }, [currentIndex]);

  return (
    <Container img={currentImg}>
      <Preload>
        <img src={mainImage1} alt="mainImage1" />
        <img src={mainImage2} alt="mainImage2" />
        <img src={mainImage3} alt="mainImage3" />
        <img src={mainImage4} alt="mainImage4" />
      </Preload>
      <NavbarContainer>
        {imgArr.map((img, index) => (
          <Nav
            onClick={() => handleBackImg(index)}
            colorValue={img.id === currentIndex}
            key={index}>
            {img.text}
          </Nav>
        ))}
        <NavText>tech</NavText>
      </NavbarContainer>
    </Container>
  );
};

export default SlideImage;
