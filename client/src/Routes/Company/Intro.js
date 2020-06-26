import React from 'react';
import styled from 'styled-components';

import main1 from '../../assets/img/main/main_img_1.png';
import main2 from '../../assets/img/company/company_img1.png';
const Container = styled.div``;

const HeaderContainer = styled.div`
  height: 18vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url(${(props) => props.back});
  background-size: cover;
  background-position: center -30px;
  display: flex;
  align-items: flex-end;
  padding: 20px 160px;
`;

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  &:nth-child(2) {
    justify-content: center;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  font-weight: 900;
`;

const HeaderText = styled.span`
  font-size: 24px;
  font-weight: 800;
  > em {
    color: red;
  }
`;

const Section = styled.div`
  padding: 5vw 7vw 0 7vw;
  display: flex;
  &:nth-child(3) {
    padding: 3vw 7vw;
    display: block;
  }
`;

const LeftBox = styled.div`
  width: 25%;
`;

const RightBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

const BigText = styled.h1`
  font-size: 50px;
  font-weight: 800;
  color: red;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-child(2) {
    margin-top: 1.5vw;
    > span {
      font-size: 20px;
      line-height: 32px;
      word-spacing: 4px;
      > em {
        color: red;
      }
    }
  }
`;

const SmallText = styled.span`
  font-size: 30px;
  word-spacing: 4px;
  line-height: 45px;
`;

const ImgBox = styled.div`
  background: url(${(props) => props.back});
  background-size: cover;
  background-position: center;
  height: 35vw;
`;

const LastBox = styled.div``;

const LastTitle = styled.h1``;

const LastText = styled.span``;

const Intro = () => {
  return (
    <Container>
      <HeaderContainer back={main1}>
        <HeaderBox>
          <HeaderTitle>회사소개</HeaderTitle>
        </HeaderBox>
        <HeaderBox>
          <HeaderText>
            행복한 &nbsp;공간&nbsp;이야기&nbsp;&nbsp;<em>미소테크</em>
          </HeaderText>
        </HeaderBox>
        <HeaderBox />
      </HeaderContainer>
      <Section>
        <LeftBox>
          <BigText>about us</BigText>
        </LeftBox>
        <RightBox>
          <Box>
            <SmallText>
              미소테크는 인테리어 디자인 도어의 미래를 개척하는 혁신기업입니다.
            </SmallText>
            <SmallText>
              인테리어 도어 분야의 마케팅과 기술영역에서 최고인 전문가 두 대표의
            </SmallText>
            <SmallText>
              만남으로 시작된 미소테크는 업계에 시너지 그 이상을 가져왔습니다.
            </SmallText>
          </Box>
          <Box>
            <SmallText>
              완벽한 공간연출과 인테리어 기능을 동시에 가질 수 있도록 하기
              위해서 두 대표를 비롯한
            </SmallText>
            <SmallText>
              <em>미소테크의 전문가집단</em>은 끊임없이 연구하고 새로움을
              창조하고 있습니다.
            </SmallText>
            <SmallText>
              아름다운 공간에서 미소짓는 고객을 생각하며 미소테크는 오늘도
              행복을 이야기 합니다.
            </SmallText>
          </Box>
        </RightBox>
      </Section>
      <Section>
        <ImgBox back={main2} />
      </Section>
      <Section>
        <LeftBox />
        <RightBox>
          <Box>
            <SmallText>
              미소테크는 인테리어 디자인 도어의 미래를 개척하는 혁신기업입니다.
            </SmallText>
            <SmallText>
              인테리어 도어 분야의 마케팅과 기술영역에서 최고인 전문가 두 대표의
            </SmallText>
            <SmallText>
              만남으로 시작된 미소테크는 업계에 시너지 그 이상을 가져왔습니다.
            </SmallText>
          </Box>
          <Box>
            <SmallText>
              완벽한 공간연출과 인테리어 기능을 동시에 가질 수 있도록 하기
              위해서 두 대표를 비롯한
            </SmallText>
            <SmallText>
              <em>미소테크의 전문가집단</em>은 끊임없이 연구하고 새로움을
              창조하고 있습니다.
            </SmallText>
            <SmallText>
              아름다운 공간에서 미소짓는 고객을 생각하며 미소테크는 오늘도
              행복을 이야기 합니다.
            </SmallText>
          </Box>
        </RightBox>
      </Section>
    </Container>
  );
};

export default Intro;
