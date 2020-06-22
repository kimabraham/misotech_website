import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 110px;
  left: 20vw;
  justify-content:space-between
  width: 100%;
  height: 200px;
  z-index:300;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    flex-direction: column;
    padding: 30px 30px;
    width: 200px;
    background: red;
  }
  &:nth-child(2) {
    width: 500px;
    background: white;
    padding: 30px 50px;
  }
  &:last-child {
    width: 300px;
    background-image: url(${(props) => props.backImg});
    background-size: cover;
  }
`;

const SubColumn = styled.div`
  width: 500px;
  &:nth-child(2) {
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 150px;
  &:first-child {
    margin: 0;
  }
  color: black;
`;

const SLink = styled(Link)`
  font-size: 15px;
  font-weight: 600;
`;

const Line = styled.div`
  width: 110px;
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
                  <SLink to={menu.link}>{menu.title}</SLink>
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
                    <SLink to={menu.link}>{menu.title}</SLink>
                  </Item>
                ))}
              </List>
            </SubColumn>
            <SubColumn>
              <List>
                {sub_menuArr.slice(3).map((menu, index) => (
                  <Item key={index}>
                    <SLink to={menu.link}>{menu.title}</SLink>
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
