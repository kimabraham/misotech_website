import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { useEffect } from 'react';
import Scroll, { Element, scroller } from 'react-scroll';
import { withRouter, Link } from 'react-router-dom';

import ProductHeader from '../../assets/img/products/ProductHeader.png';
import ProductContent from './ProductContent';
import one1 from '../../assets/img/products/one/oneSliding.png';
import one2 from '../../assets/img/products/one/oneSliding2.png';
import one3 from '../../assets/img/products/one/oneSliding3.png';
import one4 from '../../assets/img/products/one/oneSliding4.png';
import one5 from '../../assets/img/products/one/oneSliding5.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 20.42vw;
  background: url(${(props) => props.back});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

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

const Title = styled(Link)`
  cursor: pointer;
  font-size: 1.5625vw;
  font-weight: ${(props) => (props.value ? 'bold' : 'nomal')};
  color: ${(props) => (props.value ? 'red' : 'black')};
`;

const HoverBar = styled.div`
  width: 5.2vw;
  height: 6px;
  background: ${(props) => (props.value ? 'red' : 'transparent')};
`;

const Products = (props) => {
  const oneRef = useRef();
  const linkRef = useRef();
  const hingeRef = useRef();
  const swingRef = useRef();
  const fixRef = useRef();

  const ProductInfoArr = [
    {
      title: '슬라이딩 도어',
      type: 'one',
      ref: oneRef,
      content: [
        { file: one1, height: '145.8vw' },
        { file: one2, height: '104.16vw' },
        { file: one3, height: '150.52vw' },
        { file: one4, height: '61.46vw' },
        { file: one5, height: '143.23vw' },
      ],
    },
    {
      title: '연동 도어',
      type: 'link',
      ref: linkRef,
      content: [
        { file: one1, height: '145.8vw' },
        { file: one2, height: '104.16vw' },
        { file: one3, height: '150.52vw' },
        { file: one4, height: '61.46vw' },
        { file: one5, height: '143.23vw' },
      ],
    },
    {
      title: '여닫이 도어',
      type: 'hinge',
      ref: hingeRef,
      content: [
        { file: one1, height: '145.8vw' },
        { file: one2, height: '104.16vw' },
        { file: one3, height: '150.52vw' },
        { file: one4, height: '61.46vw' },
        { file: one5, height: '143.23vw' },
      ],
    },
    {
      title: '스윙 도어',
      type: 'swing',
      ref: swingRef,
      content: [
        { file: one1, height: '145.8vw' },
        { file: one2, height: '104.16vw' },
        { file: one3, height: '150.52vw' },
        { file: one4, height: '61.46vw' },
        { file: one5, height: '143.23vw' },
      ],
    },
    {
      title: '픽스 도어',
      type: 'fix',
      ref: fixRef,
      content: [
        { file: one1, height: '145.8vw' },
        { file: one2, height: '104.16vw' },
        { file: one3, height: '150.52vw' },
        { file: one4, height: '61.46vw' },
        { file: one5, height: '143.23vw' },
      ],
    },
  ];

  const {
    location: { pathname },
  } = props;
  const path = pathname.split('/')[2];

  useEffect(() => {
    const oneOffset = oneRef.current.offsetTop;
    const linkOffset = linkRef.current.offsetTop;
    const hingeOffset = hingeRef.current.offsetTop;
    const swingOffset = swingRef.current.offsetTop;
    const fixOffset = fixRef.current.offsetTop;
    const scroll = Scroll.animateScroll;
    switch (path) {
      case 'one':
        scroll.scrollTo(oneOffset - 150, {
          duration: 1600,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        break;
      case 'link':
        scroll.scrollTo(linkOffset - 150, {
          duration: 1600,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        break;
      case 'hinge':
        scroll.scrollTo(hingeOffset - 150, {
          duration: 1600,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        break;
      case 'swing':
        scroll.scrollTo(swingOffset - 150, {
          duration: 1600,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        break;
      case 'fix':
        scroll.scrollTo(fixOffset - 150, {
          duration: 1600,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        break;

      default:
        break;
    }
  }, [path]);

  return (
    <Container>
      <Header back={ProductHeader} />
      {ProductInfoArr.map((data, index) => (
        <React.Fragment key={index}>
          <MenuBox ref={data.ref}>
            {ProductInfoArr.map((info, index) => (
              <Menu key={index}>
                <Title></Title>
                <Title to={info.type} value={path === info.type}>
                  {info.title}
                </Title>
                <HoverBar value={path === info.type} />
              </Menu>
            ))}
          </MenuBox>
          <ProductContent datas={data.content} />
        </React.Fragment>
      ))}
    </Container>
  );
};

export default withRouter(Products);
