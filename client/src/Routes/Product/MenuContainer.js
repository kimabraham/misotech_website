import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuBox = styled.div`
  width: 88.28vw;
  display: flex;
  height: 4.95vw;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: 5.73vw;
  margin-bottom: 4.427vw;
`;

const Menu = styled.div`
  margin-right: 6.25vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  :hover {
    > span {
      color: red;
      font-weight: bold;
    }
    > div {
      background: red;
    }
  }
`;

const Title = styled.a`
  cursor: pointer;
  font-size: 1.5625vw;
  font-weight: ${(props) => (props.pathBool ? 'bold' : 'nomal')};
  color: ${(props) => (props.pathBool ? 'red' : 'black')};
`;

const HoverBar = styled.div`
  width: 5.2vw;
  height: 6px;
  background: ${(props) => (props.pathBool ? 'red' : 'transparent')};
`;

const MenuContainer = ({ path }) => {
  return (
    <MenuBox>
      <Menu>
        <Title></Title>
        <Title href="one" pathBool={path === 'one'}>
          슬라이딩 도어
        </Title>
        <HoverBar pathBool={path === 'one'} />
      </Menu>
      <Menu>
        <Title></Title>
        <Title href="link" pathBool={path === 'link'}>
          연동 도어
        </Title>
        <HoverBar pathBool={path === 'link'} />
      </Menu>
      <Menu>
        <Title></Title>
        <Title href="hinge" pathBool={path === 'hinge'}>
          여닫이 도어
        </Title>
        <HoverBar pathBool={path === 'hinge'} />
      </Menu>
      <Menu>
        <Title></Title>
        <Title href="swing" pathBool={path === 'swing'}>
          스윙 도어
        </Title>
        <HoverBar pathBool={path === 'swing'} />
      </Menu>
      <Menu>
        <Title></Title>
        <Title href="fix" pathBool={path === 'fix'}>
          픽스 도어
        </Title>
        <HoverBar pathBool={path === 'fix'} />
      </Menu>
    </MenuBox>
  );
};

export default MenuContainer;
