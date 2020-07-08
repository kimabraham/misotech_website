import React from 'react';
import styled from 'styled-components';
import MenuContainer from './MenuContainer';

import ProductHeader from '../../assets/img/products/ProductHeader.png';
import { withRouter } from 'react-router-dom';

import one1 from '../../assets/img/products/one/oneSliding.png';
import one2 from '../../assets/img/products/one/oneSliding2.png';
import one3 from '../../assets/img/products/one/oneSliding3.png';
import one4 from '../../assets/img/products/one/oneSliding4.png';
import one5 from '../../assets/img/products/one/oneSliding5.png';
import ProductContent from './ProductContent';

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

const ProductInfoArr = [
  {
    path: 'one',
    content: [
      { file: one1, height: '145.8vw' },
      { file: one2, height: '104.16vw' },
      { file: one3, height: '150.52vw' },
      { file: one4, height: '61.46vw' },
      { file: one5, height: '143.23vw' },
    ],
  },
  {
    path: 'link',
    content: [
      { file: one1, height: '145.8vw' },
      { file: one2, height: '104.16vw' },
      { file: one3, height: '150.52vw' },
      { file: one4, height: '61.46vw' },
      { file: one5, height: '143.23vw' },
    ],
  },
  {
    path: 'hinge',
    content: [
      { file: one1, height: '145.8vw' },
      { file: one2, height: '104.16vw' },
      { file: one3, height: '150.52vw' },
      { file: one4, height: '61.46vw' },
      { file: one5, height: '143.23vw' },
    ],
  },
  {
    path: 'swing',
    content: [
      { file: one1, height: '145.8vw' },
      { file: one2, height: '104.16vw' },
      { file: one3, height: '150.52vw' },
      { file: one4, height: '61.46vw' },
      { file: one5, height: '143.23vw' },
    ],
  },
  {
    path: 'fix',
    content: [
      { file: one1, height: '145.8vw' },
      { file: one2, height: '104.16vw' },
      { file: one3, height: '150.52vw' },
      { file: one4, height: '61.46vw' },
      { file: one5, height: '143.23vw' },
    ],
  },
];

const Products = () => {
  return (
    <Container>
      <Header back={ProductHeader} />
      {ProductInfoArr.map((productInfo, index) => (
        <React.Fragment key={index}>
          <MenuContainer path={productInfo.path} />
          <ProductContent datas={productInfo.content} />
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Products;
