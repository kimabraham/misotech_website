import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 110px;
  left: 20vw;
  justify-content:space-between
  width: 60vw;
  height: 200px;
`;

const Column = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  padding: 2vw 3vw;
  &:first-child {
    flex-direction: column;
    padding: 2vw 1.5vw;
    width: 200px;
    background: red;
  }
  &:nth-child(2) {
    background: white;
  }
  &:last-child {
    width: 18vw;
    background-image: url(${(props) => props.backImg});
    background-size: cover;
  }
`;

const SubColumn = styled.div`
  &:nth-child(2) {
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 1vw;
  text-transform: uppercase;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 8vw;
  &:first-child {
    margin: 0;
  }
  color: black;
`;

const SLink = styled(Link)``;

const Line = styled.div`
  width: 6vw;
  height: 1px;
  margin: 5px 0;
  background-color: white;
`;

const Dropdown = ({ data }) => {
  const { title_ko, title_en, sub_menuArr, img_src } = data;
  return (
    <Container>
      <Column>
        <Title>{title_en}</Title>
        <Line></Line>
        <Title>{title_ko}</Title>
      </Column>
      <Column>
        {sub_menuArr.length < 4 ? (
          <SubColumn>
            <List>
              {sub_menuArr.map((menu, index) => (
                <Item key={index}>
                  <SLink href={menu.link}>{menu.title}</SLink>
                </Item>
              ))}
            </List>
          </SubColumn>
        ) : (
          <>
            <SubColumn>
              <List>
                {sub_menuArr.slice(0, 3).map((menu, index) => (
                  <Item key={index}>
                    <SLink href={menu.link}>{menu.title}</SLink>
                  </Item>
                ))}
              </List>
            </SubColumn>
            <SubColumn>
              <List>
                {sub_menuArr.slice(3).map((menu, index) => (
                  <Item key={index}>
                    <SLink href={menu.link}>{menu.title}</SLink>
                  </Item>
                ))}
              </List>
            </SubColumn>
          </>
        )}
      </Column>
      <Column backImg={img_src} />
    </Container>
  );
};

export default Dropdown;
