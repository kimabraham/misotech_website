import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import misoLogo from '../../assets/img/misotech_logo.png';
import instaIcon from '../../assets/img/icon/instagram_icon.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 180px 5px 180px;
  background-color: #f1f2f6;
  min-width: 1320px;
`;

const Column = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: flex-end;
  &:last-child {
    justify-content: flex-end;
    min-width: 216px;
  }
`;

const Logo = styled.img`
  width: 120px;
`;

const Icon = styled.img`
  width: 20px;
  margin-left: 20px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  height: 20px;
`;

const Item = styled.li`
  margin-left: 40px;
  font-weight: 700;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 16px;
  margin-left: 5px;
`;

const Text = styled.span`
  font-weight: 800;
  font-size: 16px;
  &:first-child {
    color: red;
  }
`;

const SLink = styled(Link)`
  font-size: 16px;
`;

const FirstHeader = () => {
  return (
    <Container>
      <Column>
        <SLink to="/">
          <Logo src={misoLogo} alt="miso_logo" />
        </SLink>
        <Title>
          고객의&nbsp;<Text>미소</Text>가 저희의&nbsp;<Text>행복</Text>입니다
        </Title>
      </Column>
      <Column>
        <List>
          <Item>
            <SLink to="/">로그인</SLink>
          </Item>
          <Item>
            <SLink to="/">회원가입</SLink>
          </Item>
        </List>
        <SLink
          to="/https://www.instagram.com/misotech/"
          target="_blank"
          style={{ height: '20px' }}>
          <Icon src={instaIcon} alt="instagram_icon" />
        </SLink>
      </Column>
    </Container>
  );
};

export default FirstHeader;
