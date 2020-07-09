import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { useEffect } from 'react';
import Scroll from 'react-scroll';
import { withRouter, Link } from 'react-router-dom';

import ProductHeader from '../../assets/img/products/productHeader.png';
import ProductContent from './ProductContent';
import one from '../../assets/img/products/one/oneSliding.png';
import MenuBar from './MenuBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: calc((415 / 1920) * 100vw);
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

const Products = (props) => {
  const oneRef = useRef();
  const linkRef = useRef();
  const hingeRef = useRef();
  const swingRef = useRef();
  const fixRef = useRef();

  const ProductInfoArr = [
    {
      title: '슬라이딩 도어',
      ref: oneRef,
      content: one,
    },
    {
      title: '연동 도어',
      ref: linkRef,
      content: one,
    },
    {
      title: '여닫이 도어',
      ref: hingeRef,
      content: one,
    },
    {
      title: '스윙 도어',
      ref: swingRef,
      content: one,
    },
    {
      title: '픽스 도어',
      ref: fixRef,
      content: one,
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
          duration: 0,
          delay: 0,
        });
        break;
      case 'link':
        scroll.scrollTo(linkOffset - 150, {
          duration: 0,
          delay: 0,
        });
        break;
      case 'hinge':
        scroll.scrollTo(hingeOffset - 150, {
          duration: 0,
          delay: 0,
        });
        break;
      case 'swing':
        scroll.scrollTo(swingOffset - 150, {
          duration: 0,
          delay: 0,
        });
        break;
      case 'fix':
        scroll.scrollTo(fixOffset - 150, {
          duration: 0,
          delay: 0,
        });
        break;

      default:
        break;
    }
  }, [path]);

  return (
    <Container>
      <Header back={ProductHeader} />
      {ProductInfoArr.map((infos, a) => (
        <React.Fragment key={alert}>
          <MenuBox ref={infos.ref}>
            <MenuBar index={a} />
          </MenuBox>
          <ProductContent datas={infos.content} />
        </React.Fragment>
      ))}
    </Container>
  );
};

export default withRouter(Products);
