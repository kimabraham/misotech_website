import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Title = styled(Link)`
  cursor: pointer;
  font-size: 1.5625vw;
  font-weight: ${(props) => (props.value ? 'bold' : 'normal')};
  color: ${(props) => (props.value ? 'red' : 'black')};
`;

const HoverBar = styled.div`
  width: 5.2vw;
  height: 6px;
  background: ${(props) => (props.value ? 'red' : 'transparent')};
`;

const Arr = [
  { title: '슬라이딩 도어', href: 'one' },
  { title: '연동 도어', href: 'link' },
  { title: '여닫이 도어', href: 'hinge' },
  { title: '스윙 도어', href: 'swing' },
  { title: '픽스 도어', href: 'fix' },
];

const MenuBar = ({ index }) => {
  return (
    <>
      {Arr.map((arr, i) => (
        <Menu key={i}>
          <Title></Title>
          <Title to={arr.href} value={i === index}>
            {arr.title}
          </Title>
          <HoverBar value={i === index} />
        </Menu>
      ))}
    </>
  );
};

export default MenuBar;
