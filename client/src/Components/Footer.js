import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  padding: 20px 10vw 40px 10vw;
  background: black;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 100px;
  /* footer copy right  */
  &:first-child {
    padding: 0;
    span:last-child {
      font-size: 10px;
      margin-top: 50px;
    }
  }
  &:last-child {
    span {
      display: flex;
      align-items: center;
    }
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
  padding-bottom: 20px;
`;

const Text = styled.span`
  color: #a4b0be;
  font-size: 16px;
  margin-top: 10px;
  font-weight: 400;
`;

const Icon = styled.i`
  color: #a4b0be;
`;

const Footer = () => {
  return (
    <Container>
      <Column>
        <Title>misotech</Title>
        <Text>주식회사 미소테크</Text>
        <Text>사업자 번호 : 724-81-01569</Text>
        <Text>경기도 남양주시 화도읍 수레로 25-30</Text>
        <Text>대표이사 : 이성태 오대욱</Text>
        <Text>Copyright ⓒ 주식회사 미소테크 All rights reserved.</Text>
      </Column>
      <Column>
        <Title>customer service</Title>
        <Text>Tel. 031-594-1042</Text>
        <Text>Fax. 031-594-1040</Text>
        <Text>E-Mail. misotech7@naver.com</Text>
        <Text>근무시간: 평일 09:00 - 18:00</Text>
      </Column>
      <Column>
        <Title>follow us</Title>
        <Text>
          <Icon className="fab fa-instagram"></Icon>&nbsp;instagram ID.
          misotech7
        </Text>
      </Column>
    </Container>
  );
};

export default Footer;
