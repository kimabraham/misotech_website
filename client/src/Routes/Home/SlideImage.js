import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mainImage1 from '../../assets/img/main/home_main_01.jpg';
import mainImage2 from '../../assets/img/main/home_main_02.jpg';
import mainImage3 from '../../assets/img/main/home_main_03.jpg';
import mainImage4 from '../../assets/img/main/home_main_04.jpg';

const Container = styled.div`
  height: 86vh;
  background-image: url(${(props) => props.img});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
  margin-left: 8px;
  color: ${(props) => (props.colorValue ? 'red' : 'black')};
  transition: color 0.3s;
`;

const NavText = styled.span`
  margin-left: 10px;
  color: #2f3542;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 2px;
`;

const imgArr = [
  { id: 0, text: 'm', src: mainImage1 },
  { id: 1, text: 'i', src: mainImage2 },
  { id: 2, text: 's', src: mainImage3 },
  { id: 3, text: 'o', src: mainImage4 },
];

const SlideImage = () => {
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
    }, 3000);
    return () => clearTimeout(id);
  }, [currentIndex]);

  // const autoImg = () => {
  //   setInterval(() => {
  //     if (currentIndex === 3) {
  //       setCurrentIndex(0);
  //       setCurrentImg(imgArr[0].src);
  //     } else {
  //       setCurrentIndex(currentIndex + 1);
  //       setCurrentImg(imgArr[currentIndex + 1].src);
  //     }
  //   }, 5000);
  // };

  // autoImg();

  return (
    <Container img={currentImg}>
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
