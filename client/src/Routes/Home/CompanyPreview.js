import React from 'react';
import styled from 'styled-components';

import backImg from '../../assets/img/moving_img.png';

const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 24vw;
  background: url(${(props) => props.backImg});
  background-size: 1905px 465px;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Box = styled.div`
  height: 100%;
  position: relative;
  right: -1050px;
  padding: 0 50px;
  background: rgba(245, 7, 7, 0.7);
  color: white;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin: 14px 0 50px 0;
`;

const Text = styled.span`
  text-align: end;
  font-size: 18px;
  line-height: 30px;
`;

const CompanyPreview = () => {
  return (
    <Container>
      <ImgBox backImg={backImg}>
        <Box>
          <Title>행복한 공간 이야기 미소테크</Title>
          <Text>
            인테리어 디자인 도어의 미래를 개척하는 혁신 기업입니다.
            <br />
            완벽한 공간연출과 인테리어 기능을 동시에 디자인하는
            <br />
            전문가 집단이 끊임없이 연구하는 창조 기업입니다.
          </Text>
        </Box>
      </ImgBox>
    </Container>
  );
};

export default CompanyPreview;
