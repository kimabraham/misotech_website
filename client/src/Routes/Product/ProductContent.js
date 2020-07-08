import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 60vw;
`;

const ProductContent = ({ datas }) => {
  return (
    <Container>
      <Img src={datas} alt="content" />
    </Container>
  );
};

export default ProductContent;
